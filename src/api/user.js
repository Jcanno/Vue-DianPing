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

/**
 * 更新用户信息
 */
export const userInfo = (data) =>{
    return axios.request({
        url: `user/userinfo/${data.id}`,
        method: 'patch',
        data
    })
  }

/**
 * 获取用户信息
 */
export const getUserInfo = (id) =>{
    return axios.request({
        url: `user/userinfo/${id}`,
        method: 'get',
    })
  }