import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'
import comment from './module/comment'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    user,
    comment
  }
})
