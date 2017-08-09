import * as types from '../types'

// Initial state for new rules
const state = {
  path: '',
  status: '',
  method: 'ALL',
  body: ''
}

const getters = {

}

const actions = {

}

const mutations = {
  [types.UPDATE_PATH] (state, value) {
    state.path = value
  },

  [types.UPDATE_STATUS] (state, value) {
    state.status = value
  },

  [types.UPDATE_METHOD] (state, value) {
    state.method = value
  },

  [types.UPDATE_BODY] (state, value) {
    state.body = value
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
