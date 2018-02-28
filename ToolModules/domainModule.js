var EventEmitter = require('events').EventEmitter,
    domain = require('domain');

var emitter1 = new EventEmitter();
var domain1 = domain.create();

domain1.on('error', function(err) {
    console.log('domain1 handle this error(' + err.message + ')');
});
domain1.add(emitter1);
emitter1.on('error', function(err) {
    console.log('Listener handle this error (' + err.message + ')');
});

emitter1.emit('error', new Error('Through listener to handle'));
emitter1.removeAllListeners('error');
emitter1.emit('error', new Error('Through domain1 to handle'));

var domain2 = domain.create();
domain2.on('error', function(err) {
    console.log('domain2 handle this error (' + err.message + ')');
});
domain2.run(function() {
    var emitter2 = new EventEmitter();
    emitter2.emit('error', new Error('Through domain2 to handle'));
});

domain1.remove(emitter1);
emitter1.emit('error', new Error('Convert to exception, running is failed'));
