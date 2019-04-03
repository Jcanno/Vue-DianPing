<template>
  <div id="app">
    <router-view style="margin-bottom:50px"/>
    <Foot></Foot>
  </div>
</template>


<script>
import Foot from './layout/Foot'
export default {
  name: 'app',

  components: {
    Foot
  }
}
</script>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

p {
  margin-block-start: 0em;
  margin-block-end: 0em;
}
</style>
