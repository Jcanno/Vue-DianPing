<style lang='less' scoped>
@import './Login.less';
</style>

<template>
  <div class="login">
    <van-field
      v-model="username"
      label="用户名"
      placeholder="请输入用户名"
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
      @click="checkLogin"
    >
      登录
    </van-button>
    
  </div>
</template>

<script>
import { Field, Toast } from 'vant';
import Vue from 'vue';
Vue.use(Field).use(Toast);
export default {
  name: 'login',

  components:{},

  data () {
    return {
      username: "",
      password: ""
    }
  },

  methods: {
    checkLogin(){
      if(this.password == "" || this.username == ""){
        Toast("请输入用户名或者密码！")
      }else {
        this.$emit('onLogin', {
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

