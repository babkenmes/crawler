const Keywords = require('../models/Keyword.js')
const Groups = require('../models/Group.js')
const { runAsyncWrapper } = require("../utils/asyncHelper")
const XLSX = require('xlsx')
const fs = require('fs')
var express = require('express');
const { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } = require('constants')
var router = express.Router();

router.get(`/`, runAsyncWrapper(async (req, res) => {
  let data = await Keywords.find();
  return res.status(200).send(data);
}))


router.put(`/:id`, runAsyncWrapper(async (req, res) => {
  const { id } = req.params;
  let keyword = await Keywords.findByIdAndUpdate(id, req.body, { new: true });
  return res.status(200).send({
    error: false,
    keyword
  })
}))

//last_run
router.delete(`/:id`, runAsyncWrapper(async (req, res) => {
  const { id } = req.params;
  let keyword = await Keywords.findByIdAndDelete(id);
  return res.status(200).send({
    error: false,
    keyword
  })
}))

router.get(`/clean`, runAsyncWrapper(async (req, res) => {
  await Keywords.find().deleteMany().exec()
  return res.status(200).send({});
}))

router.get(`/resetall`, runAsyncWrapper(async (req, res) => {
  await Keywords.updateMany({}, { running: false, last_run: null });
  return res.status(200).send({});
}))

router.get(`/getOne/:region`, runAsyncWrapper(async (req, res) => {
  const { region } = req.params;
  console.log(`region -- ${region} requested`)
  var running_period = new Date();
  running_period.setDate(running_period.getDate() - 2)

  const filter = { '$or': [{ region_tag: region, reserved: false, last_run: { $lte: running_period } }, { region_tag: region, reserved: false, last_run: null }] };
  const rand = Math.floor(Math.random() * 1000000)

  const keyword = await Keywords.findOneAndUpdate(filter, { $set: { reserved: true, reserved_on: new Date(), priority: rand } }, { new: true }).sort("priority");

  if (keyword) {
    console.log(`key -- ${keyword._id} with words -- ${keyword.words} was given to region -- ${region}`)
    return res.status(200).send({
      error: false,
      keyword
    })
  }
  else {
    console.log(`region -- ${region} no free keyword`)
    // await Keywords.update({ running: true }, { "$set": { running: false } }, { "multi": true });
    return res.status(404).send({
      error: "No free keyword"
    })
  }
}))

router.get(`/done/:id`, runAsyncWrapper(async (req, res) => {
  const { id } = req.params;
  let keyword = await Keywords.findById(id)
  const now = new Date()
  const duration = (now - keyword.last_run) / 1000
  keyword.durations = [...(keyword.durations || []), { start: keyword.last_run, end: now, duration, landed: true }]
  keyword.running = false;
  keyword.reserved = false,
    keyword = await keyword.save();

  return res.status(200).send({
    error: false,
    keyword
  })

}))


router.get(`/started/:id`, runAsyncWrapper(async (req, res) => {
  const { id } = req.params;
  let keyword = await Keywords.findById(id)
  const now = new Date()
  keyword.running = true;
  keyword.last_run = now;
  keyword = await keyword.save();

  return res.status(200).send({
    error: false,
    keyword
  })

}))

router.get(`/stopped/:id`, runAsyncWrapper(async (req, res) => {
  const { id } = req.params;
  let keyword = await Keywords.findById(id)
  keyword.running = false;
  keyword.reserved = false;
  keyword = await keyword.save();

  return res.status(200).send({
    error: false,
    keyword
  })

}))


router.put(`/captcha/:id`, runAsyncWrapper(async (req, res) => {
  const { id } = req.params;
  const { landed } = req.body
  let keyword = await Keywords.findById(id)

  const now = new Date()
  const duration = (now - keyword.last_run) / 1000
  keyword.durations = [...keyword.durations || [], { start: keyword.last_run, end: now, duration, error: true, landed }]
  keyword.hasError = true;
  keyword.errorMessage = "CAPTCHA";
  keyword.running = false;
  keyword.reserved = false;
  keyword.last_run = null;
  keyword = await keyword.save();

  return res.status(200).send({
    error: false,
    keyword
  })

}))

router.put(`/error/:id`, runAsyncWrapper(async (req, res) => {
  const { id } = req.params;
  const { errorMessage, landed } = req.body

  let keyword = await Keywords.findById(id)
  const now = new Date()
  const duration = (now - keyword.last_run) / 1000
  keyword.durations = [...keyword.durations || [], { start: keyword.last_run, end: now, duration, error: true, errorMessage, landed }]
  keyword.hasError = true;
  keyword.errorMessage = errorMessage;
  keyword.running = false;
  keyword.reserved = false,
    keyword = await keyword.save();

  return res.status(200).send({
    error: false,
    keyword
  })

}))

router.get(`/errors/:page/:page_size/:sort`, runAsyncWrapper(async (req, res) => {
  const { page, sort, page_size } = req.params;
  let keywords = await Keywords.find({ hasError: true }).skip(page * page_size).limit(page_size * 1).sort({ [`${sort || 'created'}`]: -1 });
  return res.status(200).send({
    error: false,
    keywords
  })
}))

router.get(`/running/:page/:page_size/:sort`, runAsyncWrapper(async (req, res) => {
  const { page, sort, page_size } = req.params;
  const count = await Keywords.find({ running: true }).count()
  let keywords = await Keywords.find({ running: true }).skip(page * page_size).limit(page_size * 1).sort({ [`${sort || 'created'}`]: -1 });
  return res.status(200).send({ keywords, count, page });
}))

router.get(`/waiting/:page/:page_size/:sort`, runAsyncWrapper(async (req, res) => {
  const { page, sort, page_size } = req.params;
  let keywords = await Keywords.find({ running: false, reserved: true }).skip(page * page_size).limit(page_size * 1).sort({ [`${sort || 'created'}`]: -1 });
  return res.status(200).send({ keywords, count, page });
}))

router.get(`/landed/:page/:page_size/:sort`, runAsyncWrapper(async (req, res) => {
  const { page, sort, page_size } = req.params;
  var running_period = new Date();
  running_period.setDate(running_period.getDate() - 2)
  const filter = { last_run: { $gte: running_period }, durations: { $elemMatch: { landed: true } } }
  const count = await Keywords.find(filter).count()
  let keywords = await Keywords.find(filter).skip(page * page_size).limit(page_size * 1).sort({ [`${sort || 'created'}`]: -1 });
  return res.status(200).send({ keywords, count, page });
}))

router.get(`/all/:page/:page_size/:sort`, runAsyncWrapper(async (req, res) => {
  const { page, sort, page_size } = req.params;
  const count = await Keywords.estimatedDocumentCount()
  let keywords = await Keywords.find().skip((page || 0) * page_size).limit(page_size * 1).sort({ [`${sort || 'created'}`]: -1 });
  return res.status(200).send({ keywords, count, page });
}))

router.get(`/resumeall`, runAsyncWrapper(async (req, res) => {
  Keywords.update({ reserved: true }, { "$set": { reserved: false } }, { "multi": true }, (err, data) => {
    return res.status(200).send({
      error: err,
      data
    })
  })
}))

router.get(`/regionstats/:region`, runAsyncWrapper(async (req, res) => {

  const { region } = req.params;
  var running_period = new Date();
  running_period.setDate(running_period.getDate() - 2)
  const landed = await Keywords.find({ region_tag: region, last_run: { $gte: running_period }, durations: { $elemMatch: { landed: true } } }).count()
  const running = await Keywords.find({ region_tag: region, reserved: true }).count()
  const not_landed = await Keywords.find({ region_tag: region, last_run: { $gte: running_period }, durations: { $elemMatch: { landed: "False" } } }).count()
  const free = await Keywords.find({ '$or': [{ region_tag: region, reserved: false, last_run: { $lte: running_period } }, { region_tag: region, reserved: false, last_run: null }] }).count()
  const total = await Keywords.find({ region_tag: region }).count()
  const captcha = await Keywords.find({ region_tag: region, errorMessage: "CAPTCHA", durations: { $elemMatch: { landed: "False" } } }).count()

  return res.status(200).send({ landed, running, not_landed, free, total, captcha });

}))

router.get(`/notreached_detailed/:region`, runAsyncWrapper(async (req, res) => {

  const { region } = req.params;
  var running_period = new Date();
  running_period.setDate(running_period.getDate() - 2)
  const not_landed = await Keywords.find({ region_tag: region, last_run: { $gte: running_period }, durations: { $elemMatch: { landed: "False" } } }).populate('animation_group').populate('device_group')
  const result = not_landed.map(item => {
    
    return {
      words: item.words,
      animation_group: item.animation_group && item.animation_group.name,
      device_group: item.device_group && item.device_group.name,
      domain: item.domain,
      tld: item.tld,
      link: item.link,
      crawl: item.crawl,
      links_count: item.links_count,
      region_tag: item.region_tag,
    }
  })

  return res.status(200).send(result);

}))


router.post(`/create_link/:id`, runAsyncWrapper(async (req, res) => {

  const { id } = req.params;
  const { link } = req.body

  const keyword = await Keywords.findById(id)
  keyword.crawled = true;
  await keyword.save();

  const randomPriority = Math.floor(Math.random() * 1000000)

  const new_link_data = {
    created: new Date(),
    words: keyword.words,
    animation_group: keyword.animation_group,
    device_group: keyword.device_group,
    domain: keyword.domain,
    tld: 'direct',
    region_tag: keyword.region_tag.replace('_crawler', ''),
    animation: keyword.animation,
    device: keyword.device,
    priority: randomPriority,
    crawl: false,
    link: link
  }

  for (let i = 0; i < keyword.links_count; i++) {
    await Keywords.create(new_link_data);
  }

  return res.status(200).send({ ok: true });

}))

router.get(`/read`, runAsyncWrapper(async (req, res) => {
  const buf = fs.readFileSync("./data/keys.xlsx");
  const wb = XLSX.read(buf, { type: 'buffer' });
  const ws = wb.Sheets[wb.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(ws, { raw: true })
  const device_groups = await Groups.find({ type: "Device" })
  const animation_groups = await Groups.find({ type: "Animation" })
  const dataWithLookups = data.map(item => {
    const randomPriority = Math.floor(Math.random() * 1000000)
    return {
      ...item, animation_group: animation_groups.find(g => g.name == item.animation_group)._id,
      device_group: device_groups.find(g => g.name == item.device_group)._id,
      priority: randomPriority,
      region_tag: item.crawl == 'true' ? `${item.region_tag}_crawler` : item.region_tag
    }
  })
  await Keywords.find().deleteMany().exec()
  Keywords.create(dataWithLookups, function (err) {
    return res.status(202).send({
      error: err,
      dataWithLookups
    })
  });

}))

router.get(`/read/:region`, runAsyncWrapper(async (req, res) => {
  const { region } = req.params;
  const buf = fs.readFileSync("./data/keys.xlsx");
  const wb = XLSX.read(buf, { type: 'buffer' });
  const ws = wb.Sheets[wb.SheetNames[0]];
  const all = XLSX.utils.sheet_to_json(ws, { raw: true })
  const data = all.filter(row => row.region_tag === region)
  const device_groups = await Groups.find({ type: "Device" })
  const animation_groups = await Groups.find({ type: "Animation" })
  const dataWithLookups = data.map(item => {
    const randomPriority = Math.floor(Math.random() * 1000000)
    return {
      ...item, animation_group: animation_groups.find(g => g.name == item.animation_group)._id,
      device_group: device_groups.find(g => g.name == item.device_group)._id,
      priority: randomPriority,
      region_tag: item.crawl == 'true' ? `${item.region_tag}_crawler` : item.region_tag
    }
  })
  await Keywords.find({ region_tag: region }).deleteMany().exec()
  Keywords.create(dataWithLookups, function (err) {
    return res.status(202).send({
      error: err,
      dataWithLookups
    })
  });

}))


function millisToMinutesAndSeconds(millis) {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

module.exports = router