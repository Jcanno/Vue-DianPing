import axios from '@/libs/request'

/**
 * 登录
 */
export const postLogin = (data) =>{
    return axios.request({
        url: `login`,
        method: 'post',
        data
    })
}

/**
 * 注册
 */
export const postRegister = (data) =>{
  return axios.request({
      url: `register`,
      method: 'post',
      data
  })
}

/**
 * 更新用户信息
 */
export const patchUserInfo = (data) =>{
    return axios.request({
        url: `userinfo/${data.id}`,
        method: 'patch',
        data
    })
  }

/**
 * 获取用户信息
 */
export const getUserInfo = (id) =>{
    return axios.request({
        url: `userinfo/${id}`,
        method: 'get',
    })
  }