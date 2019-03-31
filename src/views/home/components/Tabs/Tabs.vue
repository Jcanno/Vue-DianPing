<style lang='less' scoped>
@import "./Tabs.less";
</style>

<template>
  <div>
    <van-tabs 
      v-model="active" 
      swipeable
      sticky
      animated
      color="#FF6739">
      <van-tab v-for="index in 8" :key="index" :title="'选项 ' + index">
        内容 {{ index }}
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
import { Tab, Tabs } from 'vant';
import Vue from 'vue'
Vue.use(Tab).use(Tabs);
export default {
  name: 'tabs',

  components:{},

  data () {
    return {
      active: 0
    }
  },

  methods: {},

  computed: {},

  mounted(){
    
  }
}
</script>

