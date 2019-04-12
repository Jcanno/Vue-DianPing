const express = require("express")
const router = express.Router()
const Comments = require('../models/Comments')
const User = require('../models/User')
const Fans = require('../models/Fans')
const Discusses = require('../models/Discusses')
const Sequelize = require('Sequelize')
const Op = Sequelize.Op

router.post('/comments/:id', (req, res) => {
  console.log(req.body);
  const userid = req.params.id;
  User.findOne({
    where: {
      userid: userid
    }
  }).then(user => {
    if(!user){
      res.status(400).json({msg: '找不到该用户!'})
    }else{
      Comments.create({
        title: req.body.title,
        content: req.body.content,
        pics: req.body.pics,
      }).then(comment => {
        user.addComment([comment]).then(() => {
          res.status(201).json(comment);
        })
      })
    }
  })
})


// 根据评论表筛选用户，去重后关联查询用户评论数据
router.get('/comments/:id', (req, res) => {
  // console.log(req.body);
  const { id, } = req.params;
  const { offset, limit } = req.query;
  
  Comments.findAll({}).then(comments => {
    if(!comments.length){
      res.status(404).json({msg: '暂无评论!'});
    }else{
      let idArr = [];
      for(let item of comments){
        idArr.push(item.userid);
      }
      let arr = [...new Set(idArr)];

      User.findAll({
        where: {
          userid: {
            [Op.not]: id,
            [Op.in]: arr
          },
        },
        offset: offset * limit,
        limit: limit,
        include: [{
          model: Comments,
          limit: 1,
          order: [
            ['createdAt', 'DESC']
          ],
        }]
      }).then(users => {
        if(users.length){          
          res.status(200).json(users);
        }else{
          res.status(404).json({msg: '没有更多评论了!'});
        }    
      })
    }
  })
})


// 获取单个评论
router.get('/comment/:commentId/:userid', (req, res) => {
  const { commentId, userid } = req.params;
  Comments.findOne({
    where: {
      id: commentId
    }
  }).then(comment => {
    User.findOne({
      where: {
        userid: comment.userid
      },

      include: [
        {
          model: Comments,
          where: {
            id: commentId
          },
          include: [
            {
              model: Discusses,
              where: {
                commentId 
              },
              required: false
            }
          ]
        },
        {
          model: Fans,
          where: {
            fanid: userid
          },
          required: false 
        }
      ]
    }).then(user => {
        res.status(200).json(user);
    }).catch(() => {
      res.status(404)
    })
  })

})

module.exports = router