var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/client/');
});

app.get('/host', (req, res) => {
  res.sendFile(__dirname + '/public/host/');
});

app.use(express.static(__dirname + '/public/'));

var host = io.of('/host');
var client = io.of('/client');

client.on('connection', function(socket){
	console.log('connection detected');

	socket.on('name', function(name) {
		console.log(name + " has joined!");
		host.emit('add', {
			id: socket.id,
			name
		});
	});

	socket.on('update', function(color) {
		console.log('server received data: ' + color);
		host.emit('update', {
			id: socket.id,
			color
		});
	});

	socket.on('updateVal', function(number) {
		host.emit('updateVal', {
			id: socket.id,
			number
		});
	});

	socket.on('complete', function(complete) {
		host.emit('complete', {
			id: socket.id,
			complete
		});
	});

	socket.on('disconnect', function() {
		console.log('a user disconnected');
		host.emit('remove', {
			id: socket.id
		});
	});

	socket.on('beat', function(data){
		// console.log('counter: ' + data);
		host.emit('beat', {
			id: socket.id,
			data
		});
	});

});

http.listen(port, function(){
  console.log('listening on port ' + port);
});