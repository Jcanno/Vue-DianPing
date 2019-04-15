<style lang='less' scoped>
@import './UserInfo.less';
</style>

<template>
  <div class="user-info">
    <Avatar 
      :size=40 
      class="avatar"
      :image="comment.avatar"
    />
    <UserDate
      :nickname="comment.user.nickname"
      :createdAt="comment.createdAt"
    />
    <AddButton 
      class="add-button"
      @handleAddOrDeleteFollow="addOrDeleteFollow"
      :isFollowed="comment.isFollowed"
    />
  </div>
</template>

<script>
import * as types from '@/store/types'
import Avatar from './Avatar'
import UserDate from './UserDate'
import AddButton from './AddButton'
import { postFollow, deleteFollow } from '@/api/fan'
import { Toast } from 'vant'
import Vue from 'vue'
Vue.use(Toast)
export default {
  name: 'userinfo',

  components:{
    Avatar,
    UserDate,
    AddButton
  },

  props: {
  },

  data () {
    return {
    }
  },

  methods: {
    reload(){
      this.$store.dispatch(types.AComment, this.$route.params.commentId)
    },
    addOrDeleteFollow(type){
      if(this.$store.getters.guserid){
        let data = {
          fanid: this.$store.getters.guserid,
          userid: this.$store.state.comment.comment.userid
        }
        if(type == "delete"){
          deleteFollow(data).then(() => {
            Toast('取消关注成功!');
            this.reload();
          })
        }else{
          postFollow(data).then(() => {
            Toast('关注成功!');
            this.reload();
          })
        }
        
      }else{
        this.$router.push('/loginPage');
      }
      
    }
  },

  computed: {
    comment(){
      return this.$store.state.comment.comment;
    },
  },

  mounted(){
    
  }
}
</script>

