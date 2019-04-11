<style lang='less' scoped>
@import "./UserDate.less";
</style>

<template>
  <div class="username-date">
    <p>{{nickname}}</p>
    <p class="date">{{createdAt}}</p>
  </div>
</template>

<script>
export default {
  name: 'userdate',

  props:{
    nickname: {
      type: String,
    },
    createdAt: {
      type: String
    },
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

