var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');

app.get('/listUsers', function(req, res) {
    fs.readFile(path.join(__dirname, 'users.json'), 'utf8', function(err, data) {
        console.log(data);
        res.end(data);
    });
});

var user = {
    "user4": {
        "name": "mohit",
        "password": "password4",
        "profession": "teacher",
        "id": 4
    }
}

app.get('/addUser', function(req, res) {
    fs.readFile(path.join(__dirname, 'users.json'), 'utf8', function(err, data) {
        if (err) {
            return console.error(err);
        }
        data = JSON.parse(data);
        data['user4'] = user['user4'];
        console.log(data);
        res.end(JSON.stringify(data));
    });
});

app.get('/deleteUser', function(req, res) {
    fs.readFile(path.join(__dirname, 'users.json'), 'utf8', function(err, data) {
        if (err) { return console.error('error: ' + err); }
        console.log(data);
        data = JSON.parse(data);
        delete data["user" + 2];
        res.end(JSON.stringify(data));
    });
});

app.get('/:id', function(req, res) {
    fs.readFile(path.join(__dirname, 'users.json'), 'utf8', function(err, data) {
        if (err) return console.error(err);
        data = JSON.parse(data);
        var user = data['user' + req.params.id];
        console.log(user);
        res.end(JSON.stringify(user));
    });
});

var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Application instance. Address is http://%s:%s', host, port);
    // console.log('dirname: ' + __dirname);
});