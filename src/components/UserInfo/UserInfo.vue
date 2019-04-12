<style lang='less' scoped>
@import './UserInfo.less';
</style>

<template>
  <div class="user-info">
    <Avatar 
      :size=40 
      class="avatar"
      :image=avatar
    />
    <UserDate
      :nickname=nickname
      :createdAt=createdAt
    />
    <AddButton 
      class="add-button"
      @handleAddOrDeleteFollow="addOrDeleteFollow"
      :btntext=btntext
    />
  </div>
</template>

<script>
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
    createdAt: {
      type: String
    },
    avatar: {
      type: String
    },
    nickname: {
      type: String
    }
  },

  data () {
    return {
      btntext: "+ 关注"
    }
  },

  methods: {
    addOrDeleteFollow(type){
      console.log(this.$store.state.comment.comment.userid);
      if(this.$store.getters.guserid){
        let data = {
          fanid: this.$store.getters.guserid,
          userid: this.$store.state.comment.comment.userid
        }
        if(type == "delete"){
          deleteFollow(data).then(() => {
            Toast('取消关注成功!');
            this.btntext = "+ 关注";
          })
        }else{
          postFollow(data).then(() => {
            Toast('关注成功!');
            this.btntext = "已关注";
          })
        }
        
      }else{
        this.$router.push('/loginPage');
      }
      
    }
  },

  computed: {},

  mounted(){
    
  }
}
</script>

