const Devices = require('../models/Device.js')
const { runAsyncWrapper } = require("../utils/asyncHelper")
const Groups = require('../models/Group.js')
const XLSX = require('xlsx')
const fs = require('fs')
var express = require('express');
var router = express.Router();


router.get(`/`, runAsyncWrapper(async (req, res) => {
  let data = await Devices.find();
  return res.status(200).send(data);
}))


router.post(`/`, runAsyncWrapper(async (req, res) => {
  let device = await Devices.create(req.body);
  return res.status(201).send({
    error: false,
    device
  })
}))


router.put(`/:id`, runAsyncWrapper(async (req, res) => {
  const { id } = req.params;
  let device = await Devices.findByIdAndUpdate(id, req.body, { new: true });
  return res.status(202).send({
    error: false,
    device
  })
}))

router.delete(`/:id`, runAsyncWrapper(async (req, res) => {
  const { id } = req.params;
  let device = await Devices.findByIdAndDelete(id);
  return res.status(202).send({
    error: false,
    device
  })
}))

router.get(`/bygroup/:group`, runAsyncWrapper(async (req, res) => {
  const { group } = req.params;
  let devices = await Devices.find({ group });
  return res.status(202).send({
    error: false,
    devices
  })
}))


router.get(`/read`, runAsyncWrapper(async (req, res) => {
  const buf = fs.readFileSync("./data/devices.xlsx");
  const wb = XLSX.read(buf, { type: 'buffer' });
  const ws = wb.Sheets[wb.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(ws, { raw: true })
  const device_groups = await Groups.find({ type: "Device" })

  const dataWithLookups = data.map(item => {
    return {
      ...item,
      group: device_groups.find(g => g.name == item.group)._id,
    }
  })

  Devices.create(dataWithLookups, function (err) {
    return res.status(202).send({
      error: err,
      dataWithLookups
    })
  });

}))


module.exports = router