<template>
  <div id="app">
    <router-view style="margin-bottom:50px"/>
    <Footer></Footer>
  </div>
</template>


<script>
import Footer from './layout/Footer'
export default {
  name: 'app',

  components: {
    Footer
  }
}
</script>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
}

p {
  margin-block-start: 0em;
  margin-block-end: 0em;
}
</style>
