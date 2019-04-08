<style lang='less' scoped>
@import "./Avatar.less";
</style>

<template>
  <img 
    :src="image" 
    alt="" 
    :style="styleObject"
  />
</template>

<script>
import hashiqi1 from '@/assets/test/hashiqi1.jpg'
export default {
  name: 'avatar',

  props:{
    image:{
      type: String,
      // default: "http://127.0.0.1:3000/static/hashiqi1.jpg"
    },
    size:{
      type: Number,
      default: 20
    }
  },

  components:{},

  data () {
    return {
      hashiqi1,
      styleObject: {
        height: `${this.size}px`,
        width: `${this.size}px`,
        'border-radius': `${this.size/2}px`
      }
    }
  },

  methods: {},

  computed: {
  },

  mounted(){
  }
}
</script>

