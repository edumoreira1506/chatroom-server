require('dotenv').config();

const socketIo = require('socket.io');
const app = require('./src/config/server');
const port = process.env.PORT;

const server = app.listen(port, () => {
	console.log(`Online server on port ${port}`);
});

const io = socketIo.listen(server);
app.set('io', io);

module.exports = {
  io
};
