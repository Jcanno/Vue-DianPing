import axios from '@/libs/request'

/**
 * 发布主题下的讨论
 */
export const postDiscuss = (data) =>{
    return axios.request({
      url: `discusses/${data.commentId}`,
      method: 'post',
      data,
    })
}