var fs = require('fs');
var readerStream = fs.createReadStream('input2.txt');
var writeStream = fs.createWriteStream('output2.txt');
readerStream.pipe(writeStream);
console.log('End...');