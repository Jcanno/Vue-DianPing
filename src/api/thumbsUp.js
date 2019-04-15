import axios from '@/libs/request'

/**
 * 点赞
 * @param  data {
 *                commentId: Int
 *                userid: Int  
 *              }
 */
export const postThumbsUp = (data) =>{
    return axios.request({
      url: `thumbsUp/${data.commentId}/${data.userid}`,
      method: 'post',
    })
}

/**
 * 取消点赞
 * @param  data {
 *                commentId: Int
 *                userid: Int  
 *              }
 */
export const deleteThumbsUp = (data) =>{
  return axios.request({
    url: `thumbsUp/${data.commentId}/${data.userid}`,
    method: 'delete',
  })
}