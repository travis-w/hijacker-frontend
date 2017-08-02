import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Router from './router'
import store from './store'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router: Router,
  store,
  render: h => h(App)
})
