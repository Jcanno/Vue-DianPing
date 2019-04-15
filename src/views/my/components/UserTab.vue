<style lang='less' scoped>
@import './UserTab.less';
</style>

<template>
  <div class="user-tab">
    <img 
      v-for="item in images" 
      :key="item" 
      :src="item" 
      alt=""
    >
  </div>
</template>

<script>
import login01 from '@/assets/login/login01.png'
import login02 from '@/assets/login/login02.png'
import login03 from '@/assets/login/login03.png'
import login04 from '@/assets/login/login04.png'
import login05 from '@/assets/login/login05.png'
export default {
  name: 'usertab',

  components:{},

  data () {
    return {
      images: [
        login01,
        login02,
        login03,
        login04,
        login05
      ]
    }
  },

  methods: {},

  computed: {},

  mounted(){
  }
}
</script>

