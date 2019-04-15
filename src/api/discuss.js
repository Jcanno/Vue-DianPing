import axios from '@/libs/request'

/**
 * 发布主题下的讨论
 * @param  data {
 *                avatar: String,
 *                nickname: String,
 *                discuss: String,
 *                userid: Int
 *                commentId: Int  
 *              }
 */
export const postDiscuss = (data) =>{
    return axios.request({
      url: `discusses/${data.commentId}`,
      method: 'post',
      data,
    })
}