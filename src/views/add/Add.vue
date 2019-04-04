<style lang='less' scoped>
@import './Add.less';
</style>

<template>
  <div>
    <van-popup 
      v-model="show" 
      position="bottom" 
      :overlay="true"

    >
      <Nav @onPublish="handlePublish"></Nav>
    </van-popup>
  </div>
</template>

<script>
import Nav from './components/Nav'
import { Popup, } from 'vant';
import Vue from 'vue';
Vue.use(Popup);
export default {
  name: 'add',

  components:{
    Nav
  },

  data () {
    return {
      show: false
    }
  },

  methods: {
    handlePublish(){
      
    }
  },

  computed: {},

  mounted(){
    this.show = true;
  }
}
</script>

