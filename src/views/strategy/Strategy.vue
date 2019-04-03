<style lang='less' scoped>
@import './Strategy.less';
</style>

<template>
  <div class="strategy">
    <img class="strategy-img" :src="city" alt="">
    <div class="strategy-item">
      <p>温州必体验</p>
      <img  class="strategy-item-img" :src="hashiqi1" alt="">
    </div>
  </div>
  
</template>

<script>
import city from '@/assets/city.jpg'
import hashiqi1 from '@/assets/test/hashiqi1.jpg'
export default {
  name: 'strategy',

  components:{},

  data () {
    return {
      city,
      hashiqi1
    }
  },

  methods: {},

  computed: {},

  mounted(){
    
  }
}
</script>

