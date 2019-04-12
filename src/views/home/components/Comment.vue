<style lang='less' scoped>
@import "./Comment.less";
</style>

<template>
  <div>
    <p>评论</p>
    <div class="comment-body">
      <Avatar 
        :size=40
        :image="image" 
        class="avatar"
      />
      <van-field 
        v-model="discuss" 
        placeholder="快来写下你的评论吧~" 
        class="comment-input">
        <van-button 
          slot="button" 
          size="small" 
          type="primary"
          round
          @click="onDiscuss"
        >
          发送
        </van-button>
      </van-field>
    </div>
    <CommentItem 
      class="comment-item"
      v-for="discuss in discusses"
      :discuss="discuss.discuss"
      :createdAt="discuss.createdAt"
      :nickname="discuss.nickname"
      :image="discuss.avatar" 
      :key="discuss.id" 
      >
    </CommentItem>
  </div>
</template>

<script>
import * as types from '@/store/types'
import { postDiscuss } from '@/api/discuss'
import LoginImage from '@/assets/login.jpg'
import Avatar from '_c/UserInfo/Avatar'
import CommentItem from '_c/CommentItem'
import { Field, Button, Toast } from 'vant';
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
      discuss: '',
      image: this.$store.state.user.user.avatar ? this.$store.state.user.user.avatar : LoginImage
    }
  },

  methods: {
    reload(){
      this.$store.dispatch(types.AComment, this.$route.params.commentId)
    },
    onDiscuss(){
      if(this.$store.getters.guserid){
        if(this.comment == ""){
          Toast('请输入内容');
        }else{
          const { 
            avatar,
            nickname,
            userid
          } = this.$store.state.user.user;
          let data = {
            avatar,
            nickname,
            userid,
            commentId: this.$route.params.commentId,
            discuss: this.discuss
          }
          postDiscuss(data).then(() => {
            console.log('成功了！');
            this.discuss = "";
            this.reload();
          })
        }
      }else{
        this.$router.push('/loginPage');
      }
      
    }
  },

  computed: {
    discusses(){
      return this.$store.state.comment.comment.comments[0].discusses;
    }
  },

  mounted(){
  }
}
</script>

