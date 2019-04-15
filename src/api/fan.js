import axios from '@/libs/request'

/**
 * 关注
 * @param  data {
 *                fanid: Int
 *                userid: Int  
 *              }
 */
export const postFollow = (data) =>{
    return axios.request({
      url: `fans/${data.fanid}/${data.userid}`,
      method: 'post',
    })
}

/**
 * 取消关注
 * @param  data {
 *                fanid: Int
 *                userid: Int  
 *              }
 */
export const deleteFollow = (data) =>{
  return axios.request({
    url: `fans/${data.fanid}/${data.userid}`,
    method: 'delete',
  })
}