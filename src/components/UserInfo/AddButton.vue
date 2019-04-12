<style lang='less' scoped>
@import './AddButton.less';
</style>

<template>
  <van-button
    size="mini" 
    round 
    class="add-button"
    @click="onAddOrDeleteFollow"
    :style="btnstyle"
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
    isFollowed: {
      type: Boolean
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

  computed: {
    btntext(){
      if(this.isFollowed){
        return "已关注";
      }else{
        return "+ 关注";
      }
    },
    btnstyle(){
      if(this.isFollowed){
        return {
          color: "#fff",
          'background-color': "#8C8C8C"
        }
      }else{
        return {
          color: "#fff",
          'background-color': "#FF6739"
        }
      }
    }
  },

  mounted(){

  }
}
</script>

