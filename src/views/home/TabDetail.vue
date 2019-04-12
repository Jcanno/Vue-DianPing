<style lang='less' scoped>
@import "./TabDetail.less";
</style>

<template>
  <div>
    <van-swipe 
      v-if="images"
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
    <User 
      class="user"
      :avatar="comment.avatar"
      :nickname="comment.nickname"
      :content="comment.comments[0].content"
      :createdAt="comment.comments[0].createdAt"
    >
    </User>
  </div>
</template>

<script>
import * as types from '@/store/types'
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
      images: [],
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

  computed: {
    comment(){
      let comment = this.$store.state.comment.comment;
      this.images = comment.comments[0].pics.split(",");
      return comment
    }
  },

  created(){
    this.$store.dispatch(types.AComment, this.$route.params.commentId).then(() => {
      // 设置初始值
      let img = new Image();
      img.src = this.images[0];
      this.height = document.body.clientWidth*img.height/img.width
    });
    
  },

  mounted(){
  }
}
</script>

