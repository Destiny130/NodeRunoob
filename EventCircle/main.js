var events = require('events');
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
	console.log('Link success.');
	eventEmitter.emit('dataReceived');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('dataReceived', function(){
	console.log('Data received successfully.');
});

eventEmitter.emit('connection');

console.log('End');

var fs = require('fs');
fs.readFile('input.txt',function (err, data) {
	if(err){
		console.log(err.stack);
		return;
	}
	console.log(data.toString());
});
console.log('End...');