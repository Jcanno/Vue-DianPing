import axios from '@/libs/request'

/**
 * 发布评论
 * @param  data {
 *                title: String,
 *                content: String,
 *                pics: Array[String]
 *                userid: Int  
 *              }
 */
export const comment = (data) =>{
    return axios.request({
      url: `comments/${data.userid}`,
      method: 'post',
      data,
    })
}

/**
 * 获取评论
 * @param query   查询参数
 * @param userid  用户id
 */
export const getComments = (userid, query = "") =>{
  return axios.request({
    url: `comments/${userid}${query}`,
    method: 'get',
  })
}

/**
 * 获取单个评论
 * @param commentId 评论id
 * @param userid    用户id
 */
export const getComment = (commentId, userid) =>{
  return axios.request({
    url: `comment/${commentId}/${userid}`,
    method: 'get',
  })
}