import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Router from './router'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router: Router,
  render: h => h(App)
})
