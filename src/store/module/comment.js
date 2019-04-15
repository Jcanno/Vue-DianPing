import * as types from '../types'
import { getComments, getComment } from '@/api/comment'


export default {
  state: {
    comments: [],
    comment: {}
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

    /**
     * 填充数据
     */
    [types.MComment](state, access) {
      state.comment = access;
    },
  },

  actions: {
    /**
     * 获取多个评论
     * @param query 查询参数
     */
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
    /**
     * 获取单个评论
     * @param commentId 评论id
     */
    [types.AComment]({getters, commit}, commentId){
      return new Promise( (resolve, reject) => {
        getComment(commentId, getters.guserid).then(res => {
          commit(types.MComment, res.data);
          resolve(res.data)
        }).catch(err => {
          commit(types.MComment, {});
          reject(err)
        })
      })
    },
  },
}