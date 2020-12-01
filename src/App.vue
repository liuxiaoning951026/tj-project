<template>
  <div id="app">
    <img src="./assets/logo.png">
    <componentsA></componentsA>
    <router-view/>
  </div>
</template>

<script>
import componentsA from '../node_modules/components-liuning/npm-components.vue'
export default {
  name: 'App',
  components: { componentsA }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
