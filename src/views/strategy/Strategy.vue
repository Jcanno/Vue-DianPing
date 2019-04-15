<style lang='less' scoped>
@import './Strategy.less';
</style>

<template>
  <div class="strategy">
    <img class="strategy-img" :src="city" alt="">
    <div class="strategy-item">
      <p>上海必体验</p>
      <img  class="strategy-item-img" :src="hashiqi1" alt="">
    </div>
    <StrategyItem></StrategyItem>
  </div>
  
</template>

<script>
import city from '@/assets/city.jpg'
import StrategyItem from './components/StrategyItem'
import hashiqi1 from '@/assets/test/hashiqi1.jpg'
export default {
  name: 'strategy',

  components:{
    StrategyItem
  },

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

