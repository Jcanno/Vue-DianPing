import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import store from '@/store'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/strategy',
    name: 'strategy',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/strategy/Strategy.vue')
  },
  {
    path: '/follow',
    name: 'follow',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/follow/Follow.vue')
  },
  {
    path: '/my',
    name: 'my',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/my/My.vue')
  },
  {
    path: '/tabDetail',
    name: 'tabDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/home/TabDetail.vue')
  },
  {
    path: '/add',
    name: 'add',
    beforeEnter: (to, from, next) => {
      if(store.state.isLogin){
        next()
      }else{
        next('loginPage')
      }
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/add/Add.vue')
  },
  {
    path: '/loginPage',
    name: 'loginPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/my/LoginPage.vue')
  }
]

const router = new Router({
  routes
})




export default router;