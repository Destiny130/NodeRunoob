var buf1 = Buffer.from('buf1...');
var buf2 = Buffer.from('buf2...');
var buf3 = Buffer.concat([buf1, buf2]);
console.log('After concat: ' + buf3.toString());

var result = buf1.compare(buf2);
console.log(result);
var result2 = buf1.compare(buf3);
console.log(result2);
var buf4 = Buffer.from(buf1);
var result3 = buf1.compare(buf4);
console.log(result3);

var buf5 = Buffer.from('0123456789876543210');
var buf6 = Buffer.from('abcdef');
buf6.copy(buf5, 3, 1, 4); //buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
console.log('buf5: ' + buf5.toString());

var buf7 = buf5.slice(3, 5);
console.log('buf7: ' + buf7.toString());