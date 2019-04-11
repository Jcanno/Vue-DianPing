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
    <AddButton class="add-button"></AddButton>
  </div>
</template>

<script>
import Avatar from './Avatar'
import UserDate from './UserDate'
import AddButton from './AddButton'
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

  methods: {},

  computed: {},

  mounted(){
    
  }
}
</script>

