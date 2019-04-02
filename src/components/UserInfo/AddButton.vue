<style lang='less' scoped>
@import './AddButton.less';
</style>

<template>
  <van-button
    size="mini" 
    round 
    class="add-button"
    >+ 关注
  </van-button>
</template>

<script>
import { Button } from 'vant';
import Vue from 'vue'
Vue.use(Button);
export default {
  name: 'addButton',

  components:{},

  data () {
    return {
    }
  },

  methods: {},

  computed: {},

  mounted(){

  }
}
</script>

