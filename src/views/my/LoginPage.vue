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
        @click="onGoBack"
        class="close"
      />
      <component 
        :is="current"
        @login="handleLogin"
        @register="handleRegister"
        class="com"
      />
      <p 
        v-if="this.current == this.Login" 
        class="registerTip"
      >
        没有账号？
        <span 
          @click="switchRegister"
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
          @click="switchLogin"
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
import Vue from 'vue';
import { 
  Icon, 
  Button, 
  Popup, 
  Toast 
} from 'vant';
Vue.use(Icon)
   .use(Button)
   .use(Popup)
   .use(Toast);
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
    onGoBack(){
      this.$router.go(-1)
    },
    switchRegister(){
      this.current = Register;
    },
    switchLogin(){
      this.current = Login;
    },
    handleLogin(data){
      this.$store.dispatch(types.ALogin, data).then(() => {
        Toast('登录成功!')
        this.$router.go(-1)
      }); 
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

