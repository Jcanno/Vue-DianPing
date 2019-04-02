<style lang='less' scoped>
@import "./Foot.less";
</style>

<template>
  <div>
    <van-tabbar 
      v-model="active"
      active-color="#FF6739"
    >
      <van-tabbar-item icon="friends" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="column" to="/strategy">攻略</van-tabbar-item>
      <van-tabbar-item icon="like" to="/follow">关注</van-tabbar-item>
      <van-tabbar-item icon="manager" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
import Vue from 'vue'
Vue.use(Tabbar).use(TabbarItem);
export default {
  name: 'foot',

  components:{
  },

  data () {
    return {
      active: 0
    }
  },

  methods: {
  },

  computed: {},

  mounted(){
    
  }
}
</script>

