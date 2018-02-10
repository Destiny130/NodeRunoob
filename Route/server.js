var http = require('http');
var url = require('url');

function start(route) {
    function onReq(req, res) {
        var pathname = url.parse(req.url).pathname;
        console.log('Req for ' + pathname + ' received.');

        route(pathname);

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        //res.send('Hello Wrold.');
        res.write('Hello World.');
        res.end();
    }
    http.createServer(onReq).listen(8888);
    console.log('Server has started.');
}

exports.start = start;