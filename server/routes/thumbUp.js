const express = require("express")
const router = express.Router()
const Thumbs = require('../models/Thumbs')

/**
 * 点赞接口
 * @param commentId  评论id
 * @param userid     用户id
 */
router.post('/thumbsUp/:commentId/:userid', (req, res) => {
  const { userid, commentId } = req.params;
  Thumbs.create({
    userid,
    commentId
  }).then(thumb => {
    res.status(201).json(thumb);
  }).catch(() => {
    res.status(404).json();
  })
})


/**
 * 取消点赞接口
 * @param commentId  评论id
 * @param userid     用户id
 */
router.delete('/thumbsUp/:commentId/:userid', (req, res) => {
  const { userid, commentId } = req.params;
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