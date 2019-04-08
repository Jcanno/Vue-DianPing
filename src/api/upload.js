import axios from '@/libs/request'

/**
 * 上传接口, 多选
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

/**
 * 上传接口, 单选
 */
export const uploadSingle = (data) =>{
  return axios.request({
    url: `uploadSingle`,
    method: 'post',
    data,
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
}