import * as types from '../types'
import { login, register, getUserInfo } from '@/api/user'


export default {
  state: {
    user: {},
    isLogin: false
  },

  getters: {

  },

  mutations: {
    /**
     * 修改登录状态
     */
    [types.MLoginState](state, access) {
      state.isLogin = access;
    },
    /**
     * 填充数据
     */
    [types.MUserInfo](state, access) {
      state.user = access;
    },
  },

  actions: {
    [types.AUserInfo]({commit}, id){
      return new Promise( (resolve, reject) => {
        getUserInfo(id).then(res => {
          commit(types.MUserInfo, res.data);
          resolve(res.data)
        }).catch(err => {
          commit(types.MUserInfo, {});
          reject(err)
        })
      })
    },
    [types.ALogin]({commit}, data){
      return new Promise( (resolve, reject) => {
        login(data).then(res => {
          commit(types.MUserInfo, res.data);
          commit(types.MLoginState, true);
          resolve(res.data)
        }).catch(err => {
          commit(types.MUserInfo, {});
          commit(types.MLoginState, false);
          reject(err)
        })
      })
    },
    // eslint-disable-next-line
    [types.ARegister]({}, data){
      return new Promise( (resolve, reject) => {
        register(data).then(res => {
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
  },
}