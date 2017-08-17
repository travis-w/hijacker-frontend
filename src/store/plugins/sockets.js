import * as types from '../types'

export default function(socket) {
  const updateRuleMutations = [
    types.TOGGLE_RULE_DISABLED,
    types.TOGGLE_RULE_SKIP_API,
    types.TOGGLE_RULE_INT_REQ,
    types.TOGGLE_RULE_INT_RES
  ]

  return store => {
    // Events from sockets
    socket.on('settings', function(data) {
      store.commit('SET_RULES', data.rules)
    })

    store.subscribe(mutation => {
      if (updateRuleMutations.indexOf(mutation.type) !== -1) {
        socket.emit('UPDATE_RULE', mutation.payload)
      }
    })
  }
}
