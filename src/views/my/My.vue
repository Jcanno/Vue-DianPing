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
      @onPopLogin="handlePopLogin"
      :isLogin="isLogin"
      :user="user"
    />
    
    <UserTab></UserTab>
  </div>
</template>

<script>
import UserCom from './components/UserCom'
import UserTab from './components/UserTab'
import { Popup, NavBar, Icon } from 'vant';
import Vue from 'vue';
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
    // handlePopLogin(){
    //   this.show = true;
    // },
    // handleClosePop(){
    //   this.show = false;
    // }
    onSetting(){
      this.$router.push('/setting');
    },
    handlePopLogin(){
      this.$router.push('/loginPage');
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
    
  }
}
</script>

