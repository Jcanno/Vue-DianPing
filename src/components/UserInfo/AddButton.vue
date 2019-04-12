<style lang='less' scoped>
@import './AddButton.less';
</style>

<template>
  <van-button
    size="mini" 
    round 
    class="add-button"
    @click="onAddOrDeleteFollow"
    >{{btntext}}
  </van-button>
</template>

<script>
import { Button } from 'vant';
import Vue from 'vue'
Vue.use(Button);
export default {
  name: 'addButton',

  components:{},

  props: {
    btntext: {
      type: String
    }
  },

  data () {
    return {
    }
  },

  methods: {
    onAddOrDeleteFollow(){
      if(this.btntext == "已关注"){
        this.$emit('handleAddOrDeleteFollow', 'delete');
      }else{  
        this.$emit('handleAddOrDeleteFollow', 'add');
      }
    }
  },

  computed: {},

  mounted(){

  }
}
</script>

