const express = require("express")
const router = express.Router()
const Comments = require('../models/Comments')
const User = require('../models/User')
const Fans = require('../models/Fans')
const Discusses = require('../models/Discusses')
const Sequelize = require('Sequelize')
const Thumbs = require('../models/Thumbs')
const sequelize = require('../db')
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
router.get('/comments/:userid', (req, res) => {
  // console.log(req.body);
  const { userid, } = req.params;
  const { offset, limit } = req.query;

  Comments.findAll({
    where: {
      userid: {
        [Op.not]: userid,
      },
    },
    offset: offset * limit,
    limit: limit,
    attributes: [
      'title', 'pics', 'id'
    ],
    include: [
      {
        model: User
      },
    ]
  }).then(comments => {
    if(!comments.length){
      res.status(404).json({msg: '没有更多评论了!'});
    }else{
      let allPro = [];
      for(let c of comments){
        let comment = c.toJSON();
        let p = thumbCount(comment, userid);
        allPro.push(p)
      }
      Promise.all(allPro).then((newcomments) => {
        res.status(200).json(newcomments);
      })
    }
  })
})


// 获取点赞数量和是否点赞
function thumbCount(comment, userid){
  return new Promise((res, rej) => {
    Thumbs.count({
      where: {
        commentId: comment.id
      }
    }).then(result => {
      comment.thumbsCount = result;
      Thumbs.findOne({
        where: {
          commentId: comment.id,
          userid
        }
      }).then(thumb => {
        if(thumb){
          comment.isThumbUp = true;
        }else{
          comment.isThumbUp = false;
        }
        res(comment)
      })  
    })
  })
}


// 获取单个评论
router.get('/comment/:commentId/:userid', (req, res) => {
  const { commentId, userid } = req.params;

  Comments.findOne({
    where: {
      id: commentId
    },
    include: [
      {
        model: User
      },
      {
        model: Discusses,
        required: false
      },
    ]
  }).then(comment => {
    if(comment){
      let newcomment = comment.toJSON();
      Fans.findOne({
        where: {
          fanid: userid
        }
      }).then(fan => {
        if(fan){
          newcomment.isFollowed = true;
        }else{
          newcomment.isFollowed = false;
        }
        res.status(200).json(newcomment);
      })
    }else{
      res.status(404).json();
    }
    
  })

  // Comments.findOne({
  //   where: {
  //     id: commentId
  //   }
  // }).then(comment => {
  //   User.findOne({
  //     where: {
  //       userid: comment.userid
  //     },

  //     include: [
  //       {
  //         model: Comments,
  //         where: {
  //           id: commentId
  //         },
  //         include: [
  //           {
  //             model: Discusses,
  //             where: {
  //               commentId 
  //             },
  //             required: false
  //           }
  //         ]
  //       },
  //       {
  //         model: Fans,
  //         where: {
  //           fanid: userid
  //         },
  //         required: false 
  //       }
  //     ]
  //   }).then(user => {
  //       res.status(200).json(user);
  //   }).catch(() => {
  //     res.status(404)
  //   })
  // })

})

module.exports = router