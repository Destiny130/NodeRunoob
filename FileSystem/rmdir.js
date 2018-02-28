var fs = require('fs');
fs.rmdir('./test', function(err) {
    if (err) {
        return console.error(err);
    }
    fs.readdir('./test/', function(err, files) {
        if (err) {
            return console.error(err);
        }
        files.forEach(function(file) {
            console.log(file);
        })
    })
})