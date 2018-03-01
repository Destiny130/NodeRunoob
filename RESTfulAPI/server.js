var express = require('express'),
    fs = require('fs');
var app = express();

app.get('/listUsers', function(req, res) {
    fs.readFile(__dirname + '/' + 'users.json', 'utf8', function(err, data) {
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
    fs.readFile(__dirname + '/' + 'users.json', 'utf8', function(err, data) {
        if (err) {
            return console.error(err);
        }
        data = JSON.parse(data);
        data['user4'] = user['user4'];
        console.log(data);
        res.end(JSON.stringify(data));
    });
});

app.get('/:id', function(req, res) {
    fs.readFile(__dirname + '/' + 'users.json', 'utf8', function(err, data) {
        if (err) return console.error(err);
        data = JSON.parse(data);
        var user = data['user' + req.params.id];
        console.log(user);
        res.end(JSON.stringify(user));
    });
});

app.get('/deleteUser', function(req, res) {
    fs.readFile(__dirname + '/' + 'users.json', 'utf8', function(err, data) {
        if (err) return console.error('error: ' + err);
        // console.log(__dirname);
        data = JSON.parse(data);
        // console.log('before delete. data: ' + data);
        delete data["user" + 2];
        // console.log('after delete. data: ' + data);
        res.end(JSON.stringify(data));
    })
})

var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Application instance. Address is httl://%s:%s', host, port);
    // console.log('dirname: ' + __dirname);
});
