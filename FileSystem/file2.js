var fs = require('fs');
console.log('Before open input.txt');
fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log('Open input.txt successfully');
});

console.log('Before open testRplus.txt')
fs.open('testRplus.txt', 'r+', function(err, fd) {
    if (err)
        return console.error(err);
    console.log('Open testRplus.txt successfully');
})