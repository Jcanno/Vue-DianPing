<style lang='less' scoped>
@import './UserInfo.less';
</style>

<template>
  <div class="user-info">
    <Avatar :size=40 class="avatar"></Avatar>
    <UserDate></UserDate>
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

