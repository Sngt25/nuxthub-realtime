export default defineWebSocketHandler({
  open(peer) {
    // Subscribe to the 'counter' channel
    peer.subscribe('counter')
    console.log('Client connected to counter channel')
  },

  message(peer, message) {
    // Parse the incoming message
    const data = message.text()
    console.log('Received message:', data)

    // Broadcast the counter value to all connected peers
    peer.publish('counter', data)
  },

  close(peer) {
    // Unsubscribe from the 'counter' channel
    peer.unsubscribe('counter')
    console.log('Client disconnected from counter channel')
  }
})
