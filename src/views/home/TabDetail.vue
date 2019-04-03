<style lang='less' scoped>
@import "./TabDetail.less";
</style>

<template>
  <div>
    <van-swipe
      @change="onChange"
      :height="height">
      <van-swipe-item 
        v-for="item in images" 
        :key="item"
        @click="onCheakPhoto">
        <img :src="item" alt="">
      </van-swipe-item>
      <div 
        class="custom-indicator" 
        slot="indicator">
        {{ current + 1 }}/{{images.length}}
      </div>
    </van-swipe>
    <van-icon 
      name="arrow-left" 
      class="back-button" 
      color="#fff" 
      size=20 
      @click="onClickBack"/>
    <User class="user"></User>
  </div>
</template>

<script>
import hashiqi1 from '@/assets/test/hashiqi1.jpg'
import hashiqi2 from '@/assets/test/hashiqi2.jpg'
import hashiqi3 from '@/assets/test/hashiqi3.jpg'
import hashiqi4 from '@/assets/test/hashiqi4.jpg'
import hashiqi5 from '@/assets/test/hashiqi5.jpg'
import User from './components/User'
import { Swipe, SwipeItem, Icon, ImagePreview } from 'vant';
import Vue from 'vue'
Vue.use(Swipe).use(SwipeItem).use(Icon);
export default {
  name: 'tabDetail',

  components:{
    User,
  },

  data () {
    return {
      current: 0,
      images:[
        hashiqi1,
        hashiqi2,
        hashiqi3,
        hashiqi4,
        hashiqi5,
      ],
      height: 0 
    }
  },

  methods: {
    onClickBack(){
      this.$router.go(-1)
    },
    onCheakPhoto(){
      ImagePreview({
        images: this.images,
        startPosition: this.current,
      });
    },
    onChange(index){
      let img = new Image();
      img.src = this.images[index]
      this.height = document.body.clientWidth*img.height/img.width
      this.current = index;
    }
  },

  computed: {},

  created(){
    // 设置初始值
    let img = new Image();
    img.src = this.images[0]
    this.height = document.body.clientWidth*img.height/img.width
  },

  mounted(){
  }
}
</script>

