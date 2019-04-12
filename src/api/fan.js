import axios from '@/libs/request'

/**
 * 关注
 */
export const postFollow = (data) =>{
    return axios.request({
      url: `fans/${data.fanid}/${data.userid}`,
      method: 'post',
    })
}

/**
 * 取消关注
 */
export const deleteFollow = (data) =>{
  return axios.request({
    url: `fans/${data.fanid}/${data.userid}`,
    method: 'delete',
  })
}