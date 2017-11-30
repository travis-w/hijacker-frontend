import * as types from '../types'

export default function(socket) {
  const updateRuleMutations = [
    types.TOGGLE_RULE_DISABLED,
    types.TOGGLE_RULE_SKIP_API,
    types.TOGGLE_RULE_INT_REQ,
    types.TOGGLE_RULE_INT_RES,
    types.UPDATE_RULE_BODY
  ]

  return store => {
    // Events from sockets
    socket.on('settings', function(data) {
      store.commit('SET_RULES', data.rules)
    })

    socket.on('UPDATE_RULE_LIST', function(data) {
      store.commit('SET_RULES', data)
    })

    socket.on('intercept', function(data) {
      switch (data.intercept.type) {
        case 'request':
          store.commit(types.ADD_NEW_REQUEST, data)
          break
        case 'response':
          store.commit(types.ADD_NEW_RESPONSE, data)
          break
      }
    })

    store.subscribe(mutation => {
      if (updateRuleMutations.indexOf(mutation.type) !== -1) {
        // Updating a rule
        socket.emit('UPDATE_RULE', mutation.payload.rule || mutation.payload)
      } else if (mutation.type === types.RESUME_INTERCEPT) {
        // Resuming intercept
        socket.emit(mutation.payload.intercept.id, mutation.payload)
      } else if (mutation.type === types.ADD_NEW_RULE) {
        // Add a new rule
        socket.emit('ADD_RULE', JSON.parse(JSON.stringify(store.state.newRule)))
      }
    })
  }
}
