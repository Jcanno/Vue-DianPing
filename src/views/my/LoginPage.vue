<style lang='less' scoped>
@import './LoginPage.less';
</style>

<template>
  <div>
    <van-popup 
      v-model="show" 
      position="bottom" 
      :overlay="false"

    >
      <van-icon 
        name="cross"
        size="20px"
        @click="closePop"
        class="close"
      />
      <component 
        :is="current"
        @onLogin="handleLogin"
        @onRegister="handleRegister"
        class="com"
      />
      <p 
        v-if="this.current == this.Login" 
        class="registerTip"
      >
        没有账号？
        <span 
          @click="transRegister"
        >
          注册
        </span> 
        一个！
      </p>
      <p 
        v-else 
        class="loginTip"
      >
        已有账号？点击
        <span 
          @click="transLogin"
        >
          登录！
        </span>
      </p>
    </van-popup>
  </div>
</template>

<script>
import * as types from '@/store/types'
import Login from './components/Login'
import Register from './components/Register'
import { Icon, Button, Popup, Toast } from 'vant';
import Vue from 'vue';
Vue.use(Icon).use(Button).use(Popup).use(Toast);
export default {
  name: 'loginpage',

  components:{
    Login,
    Register
  },

  props: {
  },

  data () {
    return {
      current: Login,
      Login,
      Register,
      show: false
    }
  },

  methods: {
    closePop(){
      this.$router.go(-1)
    },
    transRegister(){
      this.current = Register;
    },
    transLogin(){
      this.current = Login;
    },
    handleLogin(data){
      this.$store.dispatch(types.ALogin, data).then(() => {
        Toast('登录成功!')
      })
    },
    handleRegister(data){
      this.$store.dispatch(types.ARegister, data).then(() => {
        Toast('注册成功!')
      })
    }
  },

  computed: {},

  mounted(){
    this.show = true;
  }
}
</script>

