require('dotenv').config();

const app = require('./src/config/server');
const port = process.env.PORT;

const server = app.listen(port, () => {
	console.log(`Online server on port ${port}`);
});

const io = require('socket.io').listen(server);
app.set('io', io);

io.on('connection', function(usuario){
  console.log('connected!')
});
