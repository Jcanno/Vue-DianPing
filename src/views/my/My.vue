<style lang='less' scoped>
@import './My.less';
</style>

<template>
  <div >
    <UserCom class="user-com"></UserCom>
    <UserTab></UserTab>
  </div>
</template>

<script>
import UserCom from './components/UserCom'
import UserTab from './components/UserTab'
export default {
  name: 'my',

  components:{
    UserCom,
    UserTab
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

