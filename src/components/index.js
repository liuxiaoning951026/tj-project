// components文件夹下寻找所有.vue格式的文件
import Vue from 'vue'
const files = require.context('../components', true, /\.vue$/)
// console.log('dfdf', files.keys()) // ['./HelloWorld.vue', './npm-components.vue']
let pages = {}
files.keys().forEach(key => {
  pages[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default
})

const install = function (vue) {
  Object.values(pages).forEach(item => {
    Vue.component(item.name, item)
  })
}
export default {
  install
}
