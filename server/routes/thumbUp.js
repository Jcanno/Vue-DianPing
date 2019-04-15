const express = require("express")
const router = express.Router()
const Thumbs = require('../models/Thumbs')

router.post('/thumbsUp/:commentId/:userid', (req, res) => {
  console.log(req.body);
  const { userid, commentId } = req.params;
  // const { userid, avatar, nickname, discuss } = req.body;
  Thumbs.create({
    userid,
    commentId
  }).then(thumb => {
    res.status(201).json(thumb);
  }).catch(() => {
    res.status(404).json();
  })
})

router.delete('/thumbsUp/:commentId/:userid', (req, res) => {
  console.log(req.body);
  const { userid, commentId } = req.params;
  // const { userid, avatar, nickname, discuss } = req.body;
  Thumbs.findOne({
    where: {
      userid,
      commentId
    }
  }).then(thumb => {
    if(!thumb){
      res.status(404).json({msg: '出错了'});
    }else{
      Thumbs.destroy({
        where: {
          userid,
          commentId
        }
      }).then(() => {
        res.status(204).json();
      }).catch(() => {
        res.status(404).json({msg: '出错了'});
      })
    }
  })
})

module.exports = router