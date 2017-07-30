import Vue from 'vue'
import VueRouter from 'vue-router'

import Router from './router'
import App from './App.vue'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router: Router,
  render: h => h(App)
})
