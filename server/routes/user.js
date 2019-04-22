const express = require("express")
const router = express.Router()
const User = require('../models/User')
const bcrypt = require("bcrypt")
const Fans = require('../models/Fans')

/**
 * 注册接口
 */
router.post('/register', (req, res) => {
  const { 
    username, 
    password, 
    nickname 
  } = req.body;
  User.findOne({
    where: {
      username
    }
  }).then(user => {
    if(user){
      res.status(400).json({msg: '用户名已经创建!'})
    }else{
      // 进行密码加密处理
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            // Store hash in your password DB.
            if(err) throw err;
            User.create({
              username,
              password: hash,
              nickname
            }).then(newUser => {
              res.status(201).json(newUser)
            }).catch(() => {
          
            })
        });
      });
    }
  })
})


/**
 * 登录接口
 */
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  User.findOne({
    where: {
      username
    }
  }).then(user => {
    if(!user){
      return res.status(404).json({msg: '用户名不存在！'})
    }else{
      bcrypt.compare(password, user.password).then(isMatch => {
        if(isMatch){
          res.status(201).json(user);
        }else{
          res.status(400).json({msg: "密码错误!"});
        }
      })
    }
  })
})



/**
 * 更改用户信息接口
 * @param userid  用户id
 */
router.patch('/userinfo/:userid', (req, res) => {
  const { userid } = req.params;
  User.findOne({
    where: {
      userid
    }
  }).then(user => {
    if(!user){
      return res.status(404).json({msg: '用户不存在！'})
    }else{
      user.update(req.body).then(() => {
        res.status(200).json()
      })
    }
  })
})

/**
 * 获取用户信息接口
 * @param userid  用户id
 */
router.get('/userinfo/:userid', (req, res) => {
  const { userid } = req.params;
  User.findOne({
    where: {
      userid
    }
  }).then(user => {
    if(!user){    
      res.status(404).json({msg: '用户不存在！'})
    }else{
      let newuser = user.toJSON();
      Fans.count({
        where: {
          fanid: userid
        }
      }).then(followsCount => {
        newuser.followsCount = followsCount;
        Fans.count({
          where: {
            userid
          }
        }).then(fansCount => {
          newuser.fansCount = fansCount;
          res.status(200).json(newuser);
        })
      })
    }
  })
})

module.exports = router