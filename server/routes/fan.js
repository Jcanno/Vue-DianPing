const express = require("express")
const router = express.Router()
const Fans = require('../models/Fans')
const User = require('../models/User')


/**
 * 关注接口
 * @param fanid  粉丝id
 * @param userid 用户id
 */
router.post('/fans/:fanid/:userid', (req, res) => {
  console.log(req.body);
  const { userid, fanid } = req.params;

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


/**
 * 取消关注接口
 * @param fanid  粉丝id
 * @param userid 用户id
 */
router.delete('/fans/:fanid/:userid', (req, res) => {
  const { userid, fanid } = req.params;

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