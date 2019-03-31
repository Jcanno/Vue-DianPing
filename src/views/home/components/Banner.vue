<style lang='less' scoped>
@import "./Banner.less";
</style>

<template>
  <div>
    <img :src="banner" alt="">
  </div>
</template>

<script>
import banner from '@/assets/banner/banner.png'
export default {
  name: 'banner',

  components:{},

  data () {
    return {
      banner
    }
  },

  methods: {},

  computed: {},

  mounted(){
    
  }
}
</script>

