import * as types from '../types'
import { postLogin, postRegister, getUserInfo } from '@/api/user'


export default {
  state: {
    user: {},
    isLogin: false
  },

  getters: {
    // 获取用户id
    [types.GUserid](state){
      if(state.user.userid){
        return state.user.userid;
      }else{
        return 0;
      }
    },
    // 获取登录状态
    [types.GLoginState](state){
      if(state.isLogin){
        return true;
      }else{
        return false;
      }
    }
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
    /**
     * 获取用户信息
     */
    [types.AUserInfo]({ getters, commit }){
      return new Promise( (resolve, reject) => {
        getUserInfo(getters.guserid).then(res => {
          commit(types.MUserInfo, res.data);
          resolve(res.data)
        }).catch(err => {
          commit(types.MUserInfo, {});
          reject(err)
        })
      })
    },
    /**
     * 登录
     */
    [types.ALogin]({commit}, data){
      return new Promise( (resolve, reject) => {
        postLogin(data).then(res => {
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
    /**
     * 注册用户
     */
    // eslint-disable-next-line 
    [types.ARegister]({}, data){
      return new Promise( (resolve, reject) => {
        postRegister(data).then(res => {
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
  },
}