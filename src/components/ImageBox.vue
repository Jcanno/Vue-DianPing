<style lang='less' scoped>
@import './ImageBox.less';
</style>

<template>
  <van-row gutter="10">
    <van-col 
      span="8"
      v-for="item in images"
      :key="item"
      >
      <img 
        :src="item" 
        alt=""
        @click="onCheakPhoto(item)"
      />
      </van-col>
  </van-row>
</template>

<script>
import hashiqi1 from '@/assets/test/hashiqi1.jpg'
import hashiqi2 from '@/assets/test/hashiqi2.jpg'
import hashiqi3 from '@/assets/test/hashiqi3.jpg'
import hashiqi4 from '@/assets/test/hashiqi4.jpg'
import hashiqi5 from '@/assets/test/hashiqi5.jpg'
import { Row, Col, ImagePreview } from 'vant';
import Vue from 'vue'
Vue.use(Row).use(Col);
export default {
  name: 'imagebox',

  props:{
    images: {
      type: Array,
      default: () => [
        hashiqi1,
        hashiqi2,
        hashiqi3,
        hashiqi4,
        hashiqi5,
      ]
    }
  },

  components:{},

  data () {
    return {
      hashiqi1,
      hashiqi2,
      hashiqi3,
      hashiqi4,
      hashiqi5,
    }
  },

  methods: {
    onCheakPhoto(item){
      let current = this.images.indexOf(item)
      ImagePreview({
        images: this.images,
        startPosition: current,
      });
    },

  },

  computed: {},

  mounted(){
    
  }
}
</script>

