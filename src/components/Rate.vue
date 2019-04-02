<style lang='less' scoped>
@import './Rate.less';
</style>

<template>
  <div class="rate">
    <span>打分</span>
    <van-rate 
      v-model="rate"
      color="#FF6739"
      :size="10" />
  </div>
</template>

<script>
import { Rate } from 'vant';
import Vue from 'vue'
Vue.use(Rate);
export default {
  name: 'rate',

  props: {
    rate: {
      type: Number,
      default: 4
    }
  },

  components:{},

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

