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
  }
}]

const getters = {

}

const actions = {

}

const mutations = {
  [types.DISABLE_RULE] (state, { id }) {
    const index = state.findIndex((rule => rule.id === id))
    state[index].disabled = true
  }
}

export default {
  state: initialState,
  getters,
  actions,
  mutations
}
