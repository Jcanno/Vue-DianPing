<style lang='less' scoped>
@import './LoginPage.less';
</style>

<template>
  <div>
    <van-icon 
      name="cross"
      size="20px"
      @click="closePop"
      class="close"
    />
    <component 
      :is="current"
      @onLogin="handleLogin"
    >
    </component>
    <p v-if="this.current == this.Login" class="registerTip">没有账号？<span @click="transRegister">注册</span> 一个！</p>
    <p v-else class="loginTip">点击<span @click="transLogin">登录</span></p>
  </div>
</template>

<script>
import Login from './components/Login'
import Register from './components/Register'
import { Icon, Button } from 'vant';
import Vue from 'vue';
Vue.use(Icon).use(Button);
export default {
  name: 'loginpage',

  components:{
    Login,
    Register
  },

  data () {
    return {
      current: Login,
      Login,
      Register
    }
  },

  methods: {
    closePop(){
      this.$emit('onClosePop')
    },
    transRegister(){
      this.current = Register;
    },
    transLogin(){
      this.current = Login;
    },
    handleLogin(data){
      console.log(data);
      
    }
  },

  computed: {},

  mounted(){
  }
}
</script>

