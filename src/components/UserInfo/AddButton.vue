<style lang='less' scoped>
@import './AddButton.less';
</style>

<template>
  <van-button
    size="mini" 
    round 
    class="add-button"
    @click="onAdd"
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

  methods: {
    onAdd(){
      this.$emit('handleAdd')
    }
  },

  computed: {},

  mounted(){

  }
}
</script>

