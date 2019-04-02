<style lang='less' scoped>
@import "./UserDate.less";
</style>

<template>
  <div class="username-date">
    <p>{{username}}</p>
    <p class="date">{{date}}</p>
  </div>
</template>

<script>
export default {
  name: 'userdate',

  props:{
    username: {
      type: String,
      default: "Kiko不能再胖了"
    },
    date: {
      type: String,
      default: "3月29日  12:03"
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

