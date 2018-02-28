var fs = require('fs');

fs.stat('/program/github/noderunoob/filesystem/input.txt', function(err, stats) {
    console.log(stats.isFile());
});

fs.stat('input.txt', function(err, stats) {
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log('Read file successfully.');
    console.log('Is file? ' + stats.isFile());
    console.log('Is directory? ' + stats.isDirectory());
});