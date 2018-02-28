var fs = require('fs');
console.log('Prepare to write in');
fs.writeFile('input.txt', 'Content to write in.', function(err) {
    if (err) {
        return console.error(err);
    }
    console.log('Data write in successfully.');
    console.log('Read data what wrote in before.');
    fs.readFile('input.txt', function(err, data) {
        if (err) {
            return console.error(err);
        }
        console.log('Read data async: ' + data.toString());
    })
})