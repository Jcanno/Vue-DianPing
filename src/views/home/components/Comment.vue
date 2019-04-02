<style lang='less' scoped>
@import "./Comment.less";
</style>

<template>
  <div>
    <p>评论</p>
    <div class="comment-body">
      <Avatar :size=40 class="avatar"></Avatar>
      <van-field 
        v-model="comment" 
        placeholder="快来写下你的评论吧~" 
        class="comment-input">
        <van-button 
          slot="button" 
          size="small" 
          type="primary"
          round>
          发送</van-button>
      </van-field>
    </div>
    <CommentItem 
      class="comment-item"
      v-for="index in 5" 
      :key="index" 
      >
    </CommentItem>
  </div>
</template>

<script>
import Avatar from '_c/UserInfo/Avatar'
import CommentItem from '_c/CommentItem'
import { Field, Button } from 'vant';
import Vue from 'vue'
Vue.use(Field).use(Button);
export default {
  name: 'comment',

  components:{
    Avatar,
    CommentItem
  },

  data () {
    return {
      comment: '',
    }
  },

  methods: {},

  computed: {},

  mounted(){
  }
}
</script>

