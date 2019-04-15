<style lang='less' scoped>
@import "./User.less";
</style>

<template>
  <div>
    <UserInfo />
    <div class="comment">
      <p>
        {{content}}
      </p>
    </div>
    <Rate />
    <Comment></Comment>
  </div>
</template>

<script>
import hashiqi1 from '@/assets/test/hashiqi1.jpg'
import Comment from './Comment'
import Rate from '_c/Rate'
import UserInfo from '_c/UserInfo/UserInfo'
import { Button } from 'vant';
import Vue from 'vue'
Vue.use(Button);
export default {
  name: 'user',

  props:{
    content: {
      type: String
    },
    rate: {
      type: Number,
      default: 4
    }
  },

  components:{
    Comment,
    UserInfo,
    Rate
  },

  data () {
    return {
      hashiqi1
    }
  },

  methods: {},

  computed: {},

  mounted(){
    
  }
}
</script>

