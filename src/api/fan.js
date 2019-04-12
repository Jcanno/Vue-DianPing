import axios from '@/libs/request'

/**
 * 关注
 */
export const postFan = (data) =>{
    return axios.request({
      url: `fans/${data.fanid}/${data.userid}`,
      method: 'post',
      data
    })
}