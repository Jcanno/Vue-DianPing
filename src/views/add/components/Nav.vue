<style lang='less' scoped>
@import './Nav.less';
</style>

<template>
  <van-nav-bar
    left-arrow
    @click-left="onGoBack"
    @click-right="onPublish"
  > 
    <van-icon 
      name="arrow-left"
      size="20px"
      color="#000000"
      slot="left"
    />
    <van-button 
      class="publish-button" 
      size="small" 
      round  
      slot="right"
    >
    发表
    </van-button>
  </van-nav-bar>
</template>

<script>
import { NavBar, Button, Icon } from 'vant';
import Vue from 'vue';
Vue.use(NavBar).use(Button).use(Icon);
export default {
  name: 'navbar',

  components:{},

  data () {
    return {
    }
  },

  methods: {
    // 回退页面
    onGoBack(){
      this.$router.go(-1);
    },
    // 发表
    onPublish(){
      this.$emit('onPublish');
    }
  },

  computed: {},

  mounted(){
  }
}
</script>

