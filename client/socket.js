const socket = io.connect();

socket.on('socket connected', data => {
  $('#status').html(`<b>${ data.message }</b>`);
});
