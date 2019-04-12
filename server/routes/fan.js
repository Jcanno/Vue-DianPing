const express = require("express")
const router = express.Router()
const Fans = require('../models/Fans')
const User = require('../models/User')

router.post('/fans/:fanid/:userid', (req, res) => {
  console.log(req.body);
  const userid = req.params.userid;
  const fanid = req.params.fanid;

  User.findOne({
    where: {
      userid
    }
  }).then(user => {
    if(!user){
      res.status(404).json({msg: '找不到该用户'});
    }else{
      Fans.create({
        fanid
      }).then(fan => {
        user.addFan([fan]).then(() => {
          res.status(201).json(fan);
        })
      })
    }
  })
})

router.delete('/fans/:fanid/:userid', (req, res) => {
  const userid = req.params.userid;
  const fanid = req.params.fanid;

  User.findOne({
    where: {
      userid
    }
  }).then(user => {
    if(!user){
      res.status(404).json({msg: '找不到该用户'});
    }else{
      Fans.destroy({
        where: {
          fanid
        }
      }).then(() => {
        res.status(204).json();
      })
    }
  })
})

module.exports = router