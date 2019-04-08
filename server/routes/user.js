const express = require("express")
const router = express.Router()
const User = require('../models/User')
const bcrypt = require("bcrypt")

router.post('/register', (req, res) => {
  console.log(req.body);
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(user => {
    if(user){
      res.status(400).json({msg: '用户名已经创建!'})
    }else{
      // 进行密码加密处理
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            // Store hash in your password DB.
            if(err) throw err;
            User.create({
              username: req.body.username,
              password: hash,
              nickname: req.body.nickname
            }).then(newUser => {
              res.status(201).json(newUser)
            }).catch(err => {
              console.log(err);              
            })
        });
      });
    }
  })
})

router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

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
          res.status(200).json(user)
        }else{
          return res.status(400).json({msg: "密码错误!"})
        }
      })
    }
  })
})


module.exports = router