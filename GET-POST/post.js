var http = require('http'),
    querystring = require('querystring'),
    util = require('util');

var postHTML = '<html><head><meta charset="utf-8"><title>Test Post</title></head>' +
    '<body>' +
    '<form method="post">' +
    'Site Name： <input name="name"><br>' +
    'Site URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

http.createServer(function(req, res) {
    var body = '';
    req.on('data', function(chunk) {
        body += chunk;
    });
    req.on('end', function() {
        body = querystring.parse(body);
        res.writeHead(200, { 'Content-Type': 'text/html; charset="utf-8' });
        if (body.name && body.url) {
            res.write('Site Name: ' + body.name);
            res.write('<br />');
            res.write('Site URL: ' + body.url);
        } else {
            res.write(postHTML);
        }
        res.end();
    })
    // var post = '';
    // req.on('data', function(chunk) {
    //     post += chunk;
    // });
    // req.on('end', function() {
    //     post = querystring.parse(post);
    //     res.end(util.inspect(post));
    // });
}).listen(3000);
