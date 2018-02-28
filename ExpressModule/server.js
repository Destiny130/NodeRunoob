var express = require('express'),
    bodyParser = require('body-parser'),
    fs = require('fs'),
    multer = require('multer');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp' }).array('image'));

app.get('/index', function(req, res) {
    res.sendFile(__dirname + '/' + 'index.html');
});

app.get('/process_get', function(req, res) {
    var response = {
        "firstName": req.query.first_name,
        "lastName": req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

app.post('/process_post', urlencodedParser, function(req, res) {
    var response = {
        "firstName": req.body.first_name,
        "lastName": req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

app.post('/file_upload', function(req, res) {
    console.log(req.files[0]);
    var desFile = __dirname + '/' + req.files[0].originalname;
    console.log('desFile: ' + desFile);
    console.log('req.files[0].path: ' + req.files[0].path);
    var response;
    fs.readFile(req.files[0].path, function(err, data) {
        fs.writeFile(desFile, data, function(err) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.files[0].originalname
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
})

var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Application instance, address is http://%s:%s', host, port);
})
