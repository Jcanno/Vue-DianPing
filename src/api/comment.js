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