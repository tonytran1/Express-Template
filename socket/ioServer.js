const ioConnect = (io, socket) => {
  socket.status = 'Online'; // Client's socket can be mutated with new variables
  initEvents(io, socket);
}

function initEvents(io, socket) {
  require('./connectEvents')(io, socket);
}

module.exports = ioConnect;
