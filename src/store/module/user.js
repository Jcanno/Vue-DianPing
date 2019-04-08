import * as types from '../types'
import { login, register } from '@/api/user'


export default {
  state: {
    user: []
  },

  getters: {

  },

  mutations: {
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
          commit(types.MLogin, res);
          resolve(res)
        }).catch(err => {
          commit(types.MLogin, [])
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