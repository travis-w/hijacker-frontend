import * as types from '../types'

// Initial state for new rules
const initialState = {
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
  },

  // eslint-disable-next-line no-unused-vars
  [types.CLEAR_NEW_RULE] (state) {
    state = initialState
  }
}

export default {
  state: initialState,
  getters,
  actions,
  mutations
}
