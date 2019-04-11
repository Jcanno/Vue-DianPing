const express = require("express")
const router = express.Router()
const Fans = require('../models/Fans')


router.post('/fans/:fanid/:userid', (req, res) => {
  console.log(req.body);
  const userid = req.params.userid;
  const fanid = req.params.fanid;
  Fans.create({
    fanid,
    userid
  }).then(fan => {
    res.status(201).json(fan);
  }).catch(() => {
    res.status(404);
  })
  // User.findOne({
  //   where: {
  //     userid: userid
  //   }
  // }).then(user => {
  //   if(!user){
  //     res.status(400).json({msg: '找不到该用户!'})
  //   }else{
  //     Comments.create({
  //       title: req.body.title,
  //       content: req.body.content,
  //       pics: req.body.pics,
  //     }).then(comment => {
  //       user.addComment([comment]).then(() => {
  //         res.status(201).json(comment);
  //       })
  //     })
  //   }
  // })
})



module.exports = router