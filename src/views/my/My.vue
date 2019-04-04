<style lang='less' scoped>
@import './My.less';
</style>

<template>
  <div >
    <UserCom 
      class="user-com"
      @onPopLogin="handlePopLogin"
    >
    </UserCom>
    <UserTab></UserTab>
    <van-popup 
      v-model="show" 
      position="bottom" 
      :overlay="true"

    >
      <LoginPage  @onClosePop="handleClosePop"/>
    </van-popup>
  </div>
</template>

<script>
import UserCom from './components/UserCom'
import UserTab from './components/UserTab'
import LoginPage from './LoginPage'
import { Popup } from 'vant';
import Vue from 'vue';
Vue.use(Popup);
export default {
  name: 'my',

  components:{
    UserCom,
    UserTab,
    LoginPage
  },

  data () {
    return {
      show: false
    }
  },

  methods: {
    handlePopLogin(){
      this.show = true;
    },
    handleClosePop(){
      this.show = false;
    }
  },
  

  computed: {},

  mounted(){
    
  }
}
</script>

