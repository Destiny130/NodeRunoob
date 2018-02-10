function say(word) {
    console.log(word);
}

function execute(someFunction, value) {
    someFunction(value);
}
execute(say, 'Hello');

function execute2(someFunction, value) {
    someFunction(value);
}
execute2(function(word) { console.log(word); }, 'Hello 2');

var http = require('http');

function onRequest(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello Wrold');
    res.end();
}
http.createServer(onRequest).listen(8888);