<style lang='less' scoped>
@import './My.less';
</style>

<template>
  <div >
    <UserCom class="user-com"></UserCom>
  </div>
</template>

<script>
import UserCom from './components/UserCom'

export default {
  name: 'my',

  components:{
    UserCom,
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

