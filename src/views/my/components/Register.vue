<style lang='less' scoped>
@import './Register.less';
@import './Login.less';
</style>

<template>
  <div class="login">
    <van-field
      v-model="username"
      label="用户名"
      placeholder="请输入登录账号"
    />

    <van-field
      v-model="nickname"
      label="昵称"
      placeholder="请输入昵称"
    />
    <van-field
      v-model="password"
      type="password"
      label="密码"
      placeholder="请输入密码"
    />

    <van-button 
      class="login-button"
      round
      @click="checkRegister"
    >
      注册
    </van-button>
    
  </div>
</template>

<script>
import { Field, Toast, Button } from 'vant';
import Vue from 'vue';
Vue.use(Field).use(Toast).use(Button);
export default {
  name: 'register',

  components:{},

  data () {
    return {
      nickname: "",
      username: "",
      password: ""
    }
  },

  methods: {
    checkRegister(){
      if(this.nickname == "" || this.username == "" || this.password == ""){
        Toast("请输入注册信息！")
      }else{
        this.$emit('onRegister', {
          nickname: this.nickname,
          username: this.username,
          password: this.password
        })
      }
    }
  },

  computed: {},

  mounted(){
  }
}
</script>

