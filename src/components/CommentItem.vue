<style lang='less' scoped>
@import './CommentItem.less';
</style>

<template>
  <div>
    <div class="item">
      <Avatar 
        :size=40 
        class="avatar"
        :image=image
      />
      <UserDate
        :nickname=nickname
        :createdAt=createdAt
      />
    </div>   
    <p class="comment-text">{{discuss}}</p>
  </div>
</template>

<script>
import Avatar from './UserInfo/Avatar'
import UserDate from './UserInfo/UserDate'
export default {
  name: 'commentlist',

  components:{
    Avatar,
    UserDate
  },

  props:{
    discuss: {
      type: String,
    },
    createdAt: {
      type: String
    },
    image: {
      type: String
    },
    nickname: {
      type: String
    },
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

