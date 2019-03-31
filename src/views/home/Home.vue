<style lang='less' scoped>
@import "./Home.less";
</style>

<template>
  <div class="home">
    <Search class="search"></Search>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from './components/Search'
export default {
  name: 'home',
  components: {
    Search
  }
}
</script>
