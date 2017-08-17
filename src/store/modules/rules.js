import * as types from '../types'

// Initial state for new rules
const initialState = [{
  'id': 0,
  'path': '/example-route',
  'skipApi': true,
  'method': 'PUT',
  'status': 400,
  'body': {
    'Hello': 'World',
    'method': 'GET'
  },
  disabled: false
}]

const getters = {

}

const actions = {

}

const mutations = {
  [types.TOGGLE_RULE_DISABLED] (state, { id }) {
    const index = state.findIndex(rule => rule.id === id)
    state[index].disabled = !state[index].disabled
  },

  [types.TOGGLE_RULE_SKIP_API] (state, { id }) {
    const index = state.findIndex(rule => rule.id === id)
    state[index].skipApi = !state[index].skipApi
  },

  [types.TOGGLE_RULE_INT_REQ] (state, { id }) {
    const index = state.findIndex(rule => rule.id === id)
    state[index].interceptRequest = !state[index].interceptRequest
  },

  [types.TOGGLE_RULE_INT_RES] (state, { id }) {
    const index = state.findIndex(rule => rule.id === id)
    state[index].interceptResponse = !state[index].interceptResponse
  }

}

export default {
  state: initialState,
  getters,
  actions,
  mutations
}
