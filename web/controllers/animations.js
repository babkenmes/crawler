const Animations = require('../models/Animation.js')
const { runAsyncWrapper } = require("../utils/asyncHelper")

var express = require('express');
var router = express.Router();


router.get(`/`, runAsyncWrapper(async (req, res) => {
  let data = await Animations.find();
  return res.status(200).send(data);
}))

router.post(`/`, runAsyncWrapper(async (req, res) => {
  let animation = await Animations.create(req.body);
  return res.status(201).send({
    error: false,
    animation
  })

}))

router.put(`/:id`, runAsyncWrapper(async (req, res) => {
  const { id } = req.params;
  let animation = await Animations.findByIdAndUpdate(id, req.body, { new: true });
  return res.status(202).send({
    error: false,
    animation
  })
}))

router.delete(`/:id`, runAsyncWrapper(async (req, res) => {
  const { id } = req.params;
  let animation = await Animations.findByIdAndDelete(id);
  return res.status(202).send({
    error: false,
    animation
  })
}))

router.get(`/bygroup/:group`, runAsyncWrapper(async (req, res) => {
  const { group } = req.params;
  let animations = await Animations.find({ group });
  return res.status(202).send({
    error: false,
    animations
  })
}))

module.exports = router