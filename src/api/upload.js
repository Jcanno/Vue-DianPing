import axios from '@/libs/request'

/**
 * 上传接口
 */
export const upload = (data) =>{
    return axios.request({
      url: `upload`,
      method: 'post',
      data,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
}