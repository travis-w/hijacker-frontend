export default function(socket) {
  return store => {
    // Events from sockets
    socket.on('settings', function(data) {
      store.commit('SET_RULES', data.rules)
    })
    // store.subscribe(mutation => {
    //   if (mutation.type === 'UPDATE_DATA') {
    //     socket.emit('update', mutation.payload)
    //   }
    // })
  }
}
