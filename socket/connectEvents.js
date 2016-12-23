const connectEvents = (io, socket) => {
  socket.emit('socket connected', { message: 'socket connected' });
}

module.exports = connectEvents;
