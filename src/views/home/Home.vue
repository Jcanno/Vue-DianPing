<style lang='less' scoped>
@import "./Home.less";
</style>

<template>
  <div class="home">
    <Search class="search"></Search>
    <Swiper class="swiper"></Swiper>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from './components/Search'
import Swiper from './components/Swiper'
export default {
  name: 'home',
  components: {
    Search,
    Swiper
  }
}
</script>
