const { runAsyncWrapper, asyncForEach } = require("../utils/asyncHelper")
const Containers = require('../models/Container.js')
const Region = require('../models/Region.js')
const { setIntervalAsync } = require('set-interval-async/dynamic')
const http = require('http');
var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get(`/`, runAsyncWrapper(async (req, res) => {
  let data = await Containers.find();
  return res.status(200).send(data);
}))


router.get(`/getregiontags`, runAsyncWrapper(async (req, res) => {
  let data = await Containers.aggregate([
    { $sort: { "name": 1 } },
    {
      $group: {
        _id: '$region_tag',
        count: { $sum: 1 }
      }
    }
  ]);
  return res.status(200).send(data);
}))



router.get(`/recap/:ip`, runAsyncWrapper(async (req, res) => {
  const httpAgent = new http.Agent({
    keepAlive: true
  });

  const { ip } = req.params;
  console.log(`RECAPing: ${ip}`)
  const containers = await Containers.find({ ip });
  console.log(`RECAPing containers: ${containers.length}`)
  await asyncForEach(containers, async (container) => {
    const { name, api } = container;
    try {
      console.log(`RECAP: registering container ${name}`)
      let region_response = await axios.get(`${api}/regions`)
      await registerContainer(container, region_response.data)
      console.log(`RECAP: successfully changed ${name} region `)
    }
    catch (error) {
      console.log(`RECAP: could not change ${name} region ${error.message}`)
      const message = `RECAP: Container reg error accured -c ${error.message}  ${error}`
      await containerError(container, message)
    }
  })
  return res.status(200).send({});
}))

router.get(`/changeregion/:id`, runAsyncWrapper(async (req, res) => {
  const httpAgent = new http.Agent({
    keepAlive: true
  });

  const { id } = req.params;
  const container = await Containers.findById(id);
  const { api, name } = container
  console.log(`registering ${name}`)
  try {
    console.log(`registering container ${name}`)
    let region_request = await axios.get(`${api}/regions`)

    const region_result = (await region_request.json());
    const data = await registerContainer(container, region_result.data)
    console.log(`successfully changed ${name} region `)
    return res.status(200).send(data);
  }
  catch (error) {
    console.log(`could not change ${name} region ${error.message}`)
    const message = `Container reg error accured -c ${error.message}  ${error}`
    await containerError(container, message)
    return res.status(500).send({
      error,
      message
    })
  }
}))


router.post(`/regme`, runAsyncWrapper(async (req, res) => {
  /****** { name: string, api: string, vpn_name: string, regions: [] } ******/
  const { name, api, reset_cycle, vpn_name, regions, region_tag } = req.body;
  const container_data = { name, api, vpn_name, reset_cycle, region_tag }
  console.log(`registering ${name}`)
  try {
    await registerContainer(container_data, regions)
    return res.status(200).send(container_data);
  }
  catch (error) {
    try {
      const message = `Container reg error accured ${error.message} ${error}`
      await containerError(container_data, message)
    }
    catch (e) {
      console.log(e)
    }
    return res.status(500).send({
      error,
      message
    })
  }
}))

router.get(`/blyaa`, runAsyncWrapper(async (req, res) => {
  try {
    const region = await Region.findOneAndUpdate(
      { vpn_name: "vpn_seo" },
      { $set: { name: "gg" } }).skip(10).exec();
    return res.status(200).send(region);
  }
  catch (error) {
    return res.status(500).send({
      error
    })
  }
}))

async function registerContainer(container_data, regions) {
  const httpAgent = new http.Agent({
    keepAlive: true
  });

  const { name, api, reset_cycle, vpn_name, ip, region_tag } = container_data;
  await updateRegions(vpn_name, regions);

  const container = await Containers.findOneAndUpdate(
    { name },
    { $set: { name, api, vpn_name, ip, reset_cycle, region_tag, has_error: false } },
    { upsert: true, new: true }).exec();

  const region = await Region.findOneAndUpdate(
    { vpn_name, "busy": { $ne: true } },
    { $set: { busy: true, start_time: new Date() } }).sort("priority").exec();

  if (!region) {
    await checkTheRegions()
    return;
    // throw new Error("No free region")
  }

  const set_region_response = await axios.get(`${api}/region/set/${region.name}`)

  if (set_region_response.status == 200) {
    const { geo } = set_region_response.data;
    await Region.findOneAndUpdate(
      { vpn_name, "name": container.current_region },
      { $set: { busy: false } }).exec();

    return await Containers.findOneAndUpdate(
      { name },
      { $set: { current_region: region.name, last_region_change: new Date(), geo_location: `${geo.country} ${geo.city}` } },
      { new: true }).exec();

  }
  else {
    checkTheRegions()
    throw new Error(set_region_response.err)
  }
}

setIntervalAsync(checkContainers, 120000)

// setIntervalAsync(checkTheRegions, 160000);

async function checkTheRegions() {
  const all_containers = await Containers.find();
  const all_regions = await Region.find();
  await asyncForEach(all_regions, async (region) => {
    if (region.busy && !all_containers.some(c => c.current_region == region.name && c.vpn_name == region.vpn_name)) {
      await Region.findOneAndUpdate(
        { name: region.name, vpn_name: region.vpn_name },
        { $set: { busy: false, last_busy_time: new Date() } }).exec();
    }
    else if (!region.busy && all_containers.some(c => c.current_region == region.name && c.vpn_name == region.vpn_name)) {
      await Region.findOneAndUpdate(
        { name: region.name, vpn_name: region.vpn_name },
        { $set: { busy: true, last_busy_time: new Date() } }).exec();
    }
  })
}

function addMinutes(date, minutes) {
  const result = new Date(date);
  result.setMinutes(result.getMinutes() + minutes)
  return result;
}


async function updateGeoInformation(name, api) {
  const httpAgent = new http.Agent({
    keepAlive: true
  });

  const geo_info_response = await axios.get(`${api}/geoinfo`)
  const result = geo_info_response.data
  const { geo, ip } = result;
  console.log(`${geo.country} ${geo.city} ip:${ip}`)
  await Containers.findOneAndUpdate(
    { name },
    { $set: { geo_location: `${geo.country} ${geo.city}`, ip } },
    { new: true }).exec();
}

async function checkContainers() {
  const httpAgent = new http.Agent({
    keepAlive: true
  });

  const db_containers = await Containers.find();
  console.log("checking containers")

  await asyncForEach(db_containers, async (container) => {
    const httpAgent = new http.Agent({
      keepAlive: true
    });

    const { last_region_change, reset_cycle, api, name } = container

    if (!last_region_change) {
      try {
        await axios.get(`http://${name}:8080/api/register`)
      }
      catch (e) {
        console.log(`container ${name} registration error -- ${e}`)
      }
      return
    }

    const next_change = addMinutes(last_region_change, reset_cycle)
    try {
      await updateGeoInformation(name, api)
    }
    catch (error) {
      console.log(`could update ${name} geo information ${error.message}`)
      const message = `Container geoinfo error accured -c ${error.message}`
      await containerError(container, message)
    }
    if (reset_cycle && next_change <= new Date()) {
      try {
        console.log(`registering container ${name} cycle ${reset_cycle}`)
        let region_response = await axios.get(`${api}/regions`)
        await registerContainer(container, region_response.data)
        console.log(`successfully changed ${name} region `)
      }
      catch (error) {
        console.log(`could not change ${name} region ${error.message}`)
        const message = `Container reg error accured -c ${error.message}  ${error}`
        await containerError(container, message)
      }
    }
  })
}

function delay(t, val) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(val);
    }, t * 1000);
  });
}

async function containerError(container, error_message, attempt = 0) {
  const httpAgent = new http.Agent({
    keepAlive: true
  });

  const { api, name } = container
  if (error_message.indexOf("AUTH_FAILED") && attempt < 2) {
    const rand_seconds = Math.floor(Math.random() * 500) + 60;
    await delay(rand_seconds)
    try {
      console.log(`a registering container ${name}`)
      let region_response = await axios.get(`${api}/regions`)
      await registerContainer(container, region_response.data)
      console.log(`successfully  changed ${name} region `)
    }
    catch (error) {
      console.log(`could not change ${name} region ${error.message}`)
      const message = `Container reg error accured -c ${error.message}  ${error}`
      // await containerError(container, message, ++attempt)
    }
  }
  else {
    await Containers.findOneAndUpdate(
      { name },
      { $set: { has_error: true, error_message } },
      { upsert: true }).exec();
  }
}

async function updateRegions(vpn_name, region_names) {

  await asyncForEach(region_names, async (name) => {
    const region = new Region({
      name,
      vpn_name
    })
    await region.save()
  })

  const existing_regions = await Region.find({ vpn_name }).exec();
  await asyncForEach(existing_regions, async (existing_region) => {
    if (!region_names.some(name => name === existing_region.name))
      await Region.find({ name: existing_region.name, vpn_name }).deleteOne().exec()
  })
}
module.exports = router