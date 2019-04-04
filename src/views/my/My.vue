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
    <!-- <LoginPage :show=show @onClosePop="handleClosePop"/> -->
  </div>
</template>

<script>
import UserCom from './components/UserCom'
import UserTab from './components/UserTab'
import { Popup } from 'vant';
import Vue from 'vue';
Vue.use(Popup);
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
    handlePopLogin(){
      this.$router.push('/loginPage')
    },
  },
  

  computed: {},

  mounted(){
    
  }
}
</script>

