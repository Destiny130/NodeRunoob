var fs = require('fs');
var read = fs.createReadStream('source.txt');
var write = fs.createWriteStream('destination.txt', { 'flags': 'a' });
read.pipe(write);
console.log('End...');