<style lang='less' scoped>
@import './UserCom.less';
</style>

<template>
  <div class="user-com" v-if="isLogin">
    <Avatar 
      :size=50 
      class="avatar"
      :image="user.avatar"
    />
    <div class="user-info">
      <p class="username">{{user.nickname}}</p>
      <p><span class="divide">粉丝  0  </span><span>关注  0</span></p>
    </div>   
  </div>
  <div class="user-login" v-else @click="onGotoLogin">
    <Avatar 
      :size=50 
      :image="DefaultLoginImage" 
      class="avatar"
    />
    <div class="user-info">
      <p class="tap-login">点击登录</p>
      <p class="tip-login">登录更精彩</p>
    </div> 
  </div>
</template>

<script>
import DefaultLoginImage from '@/assets/login.jpg'
import Avatar from '_c/UserInfo/Avatar'
export default {
  name: 'usercom',

  components:{
    Avatar
  },

  props: {
  },

  data () {
    return {
      DefaultLoginImage
    }
  },

  methods: {
    // 跳转登录
    onGotoLogin(){
      this.$router.push('/loginPage');
    }
  },

  computed: {
    // 是否登录
    isLogin(){
      return this.$store.getters.gloginstate;
    },
    // 用户信息
    user(){
      return this.$store.state.user.user;
    },
    
  },

  mounted(){
  }
}
</script>

