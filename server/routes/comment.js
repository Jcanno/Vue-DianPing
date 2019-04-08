const express = require("express")
const router = express.Router()
const Comment = require('../models/Comment')
const User = require('../models/User')

router.post('/comment', (req, res) => {
  console.log(req.body);
  User.findOne({
    where: {
      userid: req.body.userid
    }
  }).then(user => {
    if(!user){
      res.status(400).json({msg: '找不到该用户!'})
    }else{
      Comment.create({
        userid: req.body.userid,
        title: req.body.title,
        content: req.body.content,
        pics: req.body.pics,
      }).then(comment => {
        res.status(201).json(comment);
      }).catch(err => {
        console.log(err);
      })
    }
  })
})

module.exports = router