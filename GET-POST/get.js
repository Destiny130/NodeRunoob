var http = require('http'),
    url = require('url'),
    util = require('util');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.write(util.inspect(url.parse(req.url, true)));
    res.write('\n');
    var params = url.parse(req.url, true).query;
    res.write("Site Name: " + params.name);
    res.write('\n');
    res.write("Site URL: " + params.url);
    res.end();
}).listen(3000);
