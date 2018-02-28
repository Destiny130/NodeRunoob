var fs = require('fs');
var buf = new Buffer(1024);

console.log('Prepare open file which already exist.');
fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }

    fs.ftruncate(fd, 10, function(err) {
        if (err) {
            return console.error(err);
        }

        console.log('Prepare read:');
        fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
            if (err) {
                return console.error(err);
            }
            console.log(bytes + ' bytes has been readed.');
            if (bytes > 0) {
                console.log(buf.slice(0, bytes).toString());
            }

            fs.close(fd, function(err) {
                if (err) {
                    return console.error(err);
                }
                console.log('File closed successfully.');
            })
        });
    });
});