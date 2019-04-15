import axios from '@/libs/request'

/**
 * 上传接口, 多选
 * @param  data {
 *                FormData 
 *              }
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
 * @param  data {
 *                FormData 
 *              }
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