const Groups = require('../models/Group.js')
const { runAsyncWrapper } = require("../utils/asyncHelper")
var express = require('express');
var router = express.Router();



router.get(`/`, runAsyncWrapper(async (req, res) => {
  let data = await Groups.find();
  return res.status(200).send(data);
}))
router.get(`/:id`, runAsyncWrapper(async (req, res) => {
  const { id } = req.params;
  let data = await Groups.findById({ _id: id });
  return res.status(200).send(data);
}))

router.post(`/`, runAsyncWrapper(async (req, res) => {
  let group = await Groups.create(req.body);
  return res.status(201).send({
    error: false,
    group
  })
}))

router.put(`/:id`, runAsyncWrapper(async (req, res) => {
  const { id } = req.params;
  let group = await Groups.findByIdAndUpdate(id, req.body, { new: true });
  return res.status(202).send({
    error: false,
    group
  })
}))

router.delete(`/:id`, runAsyncWrapper(async (req, res) => {
  const { id } = req.params;
  let group = await Groups.findByIdAndDelete(id);
  return res.status(202).send({
    error: false,
    group
  })
}))

router.get(`/getByType/:type`, runAsyncWrapper(async (req, res) => {
  const { type } = req.params;
  let groups = await Groups.find({ type });
  return res.status(202).send({
    error: false,
    groups
  })
}))


module.exports = router