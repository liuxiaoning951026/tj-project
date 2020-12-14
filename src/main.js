// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// // 全局打入组件
// import * as component from '../src/components/index'
// console.log(component)
// Object.values(component).forEach(item => {
//   Vue.component(item.name, item)
// })

// 使用vue.use的方式注册全局组件
import components from '@components'
// import components from '../node_modules/components-liuning'
Vue.use(components)
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
