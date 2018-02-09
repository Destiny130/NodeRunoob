var EventEmitter = require('events').EventEmitter;
var events = new EventEmitter();

events.on('firstEvent', function() {
    console.log('firstEvent happend.');
});

setTimeout(function() { events.emit('firstEvent'); }, 1000);

var emitter = new EventEmitter();
emitter.on('secondEvent', function(param1, param2) {
    console.log('param1 is ' + param1 + ', param2 is ' + param2);
});

emitter.emit('secondEvent', 'ppp1', 'ppp2');

console.log('Remove all listeners for emitter.');
emitter.removeAllListeners('emitter');
console.log('Remove success');

function CountListeners(obj, eventName) {
    return require('events').EventEmitter.listenerCount(obj, eventName);
}

var onceListener = function OnceListener(i) {
    console.log('This is once listener. Emit time: ' + i);
    console.log('In once count: ' + CountListeners(emitter, 'thirdEvent'));
}

function ShowNewListener(a, b) {
    console.log('New Listener\'s event name: ' + a);
    console.log('New Listener\'s function: ' + b);
}
//emitter.setMaxListeners(1);
emitter.on('newListener', function(a, b) { ShowNewListener(a, b); });

console.log('Before once count : ' + CountListeners(emitter, 'thirdEvent'));
emitter.once('thirdEvent', onceListener);
console.log('After once count: ' + CountListeners(emitter, 'thirdEvent'));
emitter.on('thirdEvent', function(i) { console.log('Normal event listener. Emit time: ' + i); });
console.log('After normal listener. Count: ' + CountListeners(emitter, 'thirdEvent'));

//emitter.on('newListener', function() { console.log('New listener added to emitter.'); });
//emitter.on('newListener', function() { console.log('New listener added to emitter.'); });

emitter.emit('thirdEvent', 1);
var test = emitter.emit('thirdEvent', 2);
console.log('Is thirdEvent has listeners? ' + test);
var test2 = emitter.emit('fakeEvent');
console.log('Is fakeEvent has listeners? ' + test2);