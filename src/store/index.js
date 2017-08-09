import Vue from 'vue'
import Vuex from 'vuex'

import io from 'socket.io-client'

import createWebSocketPlugin from './plugins/sockets'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

import NewRuleModule from './modules/new-rule'

Vue.use(Vuex)

// Setup Socket Plugin
const socketPlugin = createWebSocketPlugin(io())

export default new Vuex.Store({
  state: {
    rules: [{
      'path': '/example-route',
      'skipApi': true,
      'method': 'PUT',
      'status': 400,
      'body': {
        'Hello': 'World',
        'method': 'GET'
      }
    }]
  },
  actions,
  getters,
  mutations,
  modules: {
    newRule: NewRuleModule
  },
  plugins: [socketPlugin]
})
