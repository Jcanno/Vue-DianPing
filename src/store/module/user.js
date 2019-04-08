import * as types from '../types'
import { login, register } from '@/api/user'


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
    [types.MLogin](state, access) {
      state.user = access;
    },
  },

  actions: {
    [types.ALogin]({commit}, data){
      return new Promise( (resolve, reject) => {
        login(data).then(res => {
          commit(types.MLogin, res.data);
          commit(types.MLoginState, true);
          resolve(res.data)
        }).catch(err => {
          commit(types.MLogin, []);
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