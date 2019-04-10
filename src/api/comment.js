import axios from '@/libs/request'

/**
 * 发布评论
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
 */
export const getComments = (userid, query = "") =>{
  return axios.request({
    url: `comments/${userid}${query}`,
    method: 'get',
  })
}