<style lang='less' scoped>
@import './UserInfo.less';
</style>

<template>
  <div class="user-info">
    <Avatar 
      :size=40 
      class="avatar"
      :image=avatar
    >
    </Avatar>
    <UserDate
      :nickname=nickname
      :createdAt=createdAt
    />
    <AddButton 
      class="add-button"
      @handleAdd="addFollow"
    />
  </div>
</template>

<script>
import Avatar from './Avatar'
import UserDate from './UserDate'
import AddButton from './AddButton'
import { postFan } from '@/api/fan'
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
    }
  },

  methods: {
    addFollow(){
      console.log(this.$store.state.comment.comment.userid);
      if(this.$store.getters.guserid){
        let data = {
          fanid: this.$store.getters.guserid,
          userid: this.$store.state.comment.comment.userid
        }
        postFan(data).then(() => {
          Toast('关注成功!')
        })
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

