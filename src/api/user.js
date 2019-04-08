import axios from '@/libs/request'

/**
 * 登录
 */
export const login = (data) =>{
    return axios.request({
        url: `user/login`,
        method: 'post',
        data
    })
}

/**
 * 注册
 */
export const register = (data) =>{
  return axios.request({
      url: `user/register`,
      method: 'post',
      data
  })
}