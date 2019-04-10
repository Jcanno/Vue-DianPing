import * as types from '../types'
import { getComments } from '@/api/comment'


export default {
  state: {
    comments: []
  },

  getters: {

  },

  mutations: {
    /**
     * 填充数据
     */
    [types.MComments](state, access) {
      state.comments = access;
    },
  },

  actions: {
    [types.AComments]({getters, commit}, query){
      return new Promise( (resolve, reject) => {
        getComments(getters.guserid, query).then(res => {
          commit(types.MComments, res.data);
          resolve(res.data)
        }).catch(err => {
          commit(types.MComments, []);
          reject(err)
        })
      })
    },
  },
}