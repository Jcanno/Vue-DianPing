<style lang='less' scoped>
@import './My.less';
</style>

<template>
  <div >
    <van-nav-bar
      right-text="按钮"
      @click-right="onSetting"
    >
      <van-icon 
        slot="right" 
        name="setting" 
        color="#FF6739"
        size="30px"
      >
      </van-icon>
    </van-nav-bar>
    <UserCom 
      class="user-com"
    />
    
    <UserTab />
  </div>
</template>

<script>
import * as types from '@/store/types';
import UserCom from './components/UserCom'
import UserTab from './components/UserTab'
import Vue from 'vue';
import { Popup, NavBar, Icon } from 'vant';
Vue.use(Popup).use(NavBar).use(Icon);
export default {
  name: 'my',

  components:{
    UserCom,
    UserTab,
  },

  data () {
    return {
      show: false
    }
  },

  methods: {
    // 跳转到设置界面
    onSetting(){
      this.$router.push('/setting');
    },
  },
  

  computed: {
    isLogin(){
      return this.$store.state.user.isLogin;
    },
    user(){
      return this.$store.state.user.user;
    }
  },

  mounted(){
    this.$store.dispatch(types.AUserInfo);
  }
}
</script>

