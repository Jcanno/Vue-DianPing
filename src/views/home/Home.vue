<style lang='less' scoped>
@import "./Home.less";
</style>

<template>
  <div class="home">
    <Search class="search"></Search>
    <Swiper class="swiper"></Swiper>
    <Banner></Banner>
    <Tabs></Tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from './components/Search'
import Swiper from './components/Swiper'
import Banner from './components/Banner'
import Tabs from './components/Tabs/Tabs'
export default {
  name: 'home',
  components: {
    Search,
    Swiper,
    Banner,
    Tabs
  }
}
</script>
