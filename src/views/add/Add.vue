<style lang='less' scoped>
@import './Add.less';
</style>

<template>
  <div>
    <!-- <van-popup 
      v-model="show" 
      position="bottom" 
      :overlay="true"

    >
      <LoginPage  @onClosePop="handleClosePop"/>
    </van-popup> -->
    <p>123456</p>
  </div>
</template>

<script>
import { Popup } from 'vant';
import Vue from 'vue';
Vue.use(Popup);
export default {
  name: 'add',

  components:{
    show: false
  },

  data () {
    return {
    }
  },

  methods: {},

  computed: {},

  mounted(){
    this.show = true;
  }
}
</script>

