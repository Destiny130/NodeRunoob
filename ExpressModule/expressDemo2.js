var express = require('express');
var app = express();

app.get('/', function(req, res) {
    console.log('Home GET request');
    res.end('Hello GET');
});

app.get('/delUser', function(req, res) {
    console.log('/delUser response DELETE request');
    res.end('DELETE page');
});

app.get('/listUser', function(req, res) {
    console.log('/listUser GET request');
    res.end('User list page');
});

app.get('/ab*cd', function(req, res) {
    console.log('/ab*cd GET request');
    res.end('Regular expression');
});

var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Application instance, address is http://%s:%s', host, port);
});
