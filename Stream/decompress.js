var fs = require('fs');
var zlib = require('zlib');
fs.createReadStream('input2.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('input3.txt'));
console.log('Decompress end...');