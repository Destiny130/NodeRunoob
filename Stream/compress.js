var fs = require('fs');
var zlib = require('zlib');
fs.createReadStream('input2.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input2.txt.gz'));
console.log('Compress end...');