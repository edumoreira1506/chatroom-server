const { socket } = require('../app');

socket.on('connection', client => {
  console.log(client);
});
