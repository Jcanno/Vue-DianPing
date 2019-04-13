const express = require("express")
const router = express.Router()
const Discusses = require('../models/Discusses')

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