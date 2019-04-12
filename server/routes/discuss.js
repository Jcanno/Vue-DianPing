const express = require("express")
const router = express.Router()
const Comments = require('../models/Comments')
const User = require('../models/User')
const Discusses = require('../models/Discusses')
const Sequelize = require('Sequelize')
const Op = Sequelize.Op

router.post('/discusses/:commentId', (req, res) => {
  console.log(req.body);
  const { commentId } = req.params;
  const { userid, avatar, nickname, discuss } = req.body;
  Discusses.create({
    userid,
    avatar,
    nickname,
    discuss,
    commentId
  }).then(discuss => {
    res.status(201).json(discuss);
  }).catch(() => {
    res.status(404).json();
  })
})



module.exports = router