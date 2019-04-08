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
  <div class="user-login" v-else @click="onLogin">
    <Avatar :size=50 class="avatar"></Avatar>
    <div class="user-info">
      <p class="tap-login">点击登录</p>
      <p class="tip-login">登录更精彩</p>
    </div> 
  </div>
</template>

<script>
import Avatar from '_c/UserInfo/Avatar'
export default {
  name: 'usercom',

  components:{
    Avatar
  },

  props: {
    isLogin: {
      type: Boolean,
      default: false
    },
    user: {
      type: Object,
    }
  },

  data () {
    return {
    }
  },

  methods: {
    onLogin(){
      this.$emit('onPopLogin');
    }
  },

  computed: {
    image(){
      return this.$store.state.user.user.avatar
    },
    
  },

  mounted(){
  }
}
</script>

