<template>
  <div id="app">
    <img src="./assets/logo.png">
    <npm-components></npm-components>
    <button @click="toClick">这是按钮</button>
    <!-- <el-button size="small" type="primary">这是按钮</el-button> -->
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
// import npmComponents from './components/npm-components.vue'
// import componentsA from '../node_modules/components-liuning/npm-components.vue'
export default {
  // components: { npmComponents },
  name: 'App',
  methods: {
    toClick () {

    }
  },
  created () {
    axios({
      method: 'get',
      url: '/api/aaa'
    }).then(data => {
      console.log(data)
    })
  }
  // components: { componentsA }
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
