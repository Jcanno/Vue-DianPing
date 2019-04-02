<style lang='less' scoped>
@import './CommentItem.less';
</style>

<template>
  <div>
    <div class="item">
      <Avatar :size=40 class="avatar"></Avatar>
      <UserDate></UserDate>
    </div>   
    <p class="comment-text">{{comment}}</p>
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
    comment: {
      type: String,
      default: "感谢评论~感谢评论~感谢评论~感谢评论~感谢评论~"
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

