import axios from '@/libs/request'

/**
 * 登录
 * @param  data {
 *                username: String
 *                password: String 
 *              }
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
 * @param  data {
 *                username: String
 *                password: String
 *                nickname: String 
 *              }
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
 * @param  data {
 *                nickname: String
 *                avatar:   String
 *                userid:   Int 
 *              }
 */
export const patchUserInfo = (data) =>{
    return axios.request({
        url: `userinfo/${data.userid}`,
        method: 'patch',
        data
    })
  }

/**
 * 获取用户信息
 * @param userid 用户id
 */
export const getUserInfo = (userid) =>{
    return axios.request({
        url: `userinfo/${userid}`,
        method: 'get',
    })
  }