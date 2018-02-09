const buf = Buffer.from('test', 'ascii');
console.log(buf.toString('hex'));
console.log(buf.toString('base64'));

const buf1 = Buffer.alloc(10);
console.log('alloc: ' + buf1.toString('hex'));

const buf2 = Buffer.alloc(10, 1);
console.log('alloc: ' + buf2.toString('hex'));

const buf22 = Buffer.alloc(10, 1, 'hex');
console.log('alloc: ' + buf22.toString('hex'));

const buf3 = Buffer.allocUnsafe(10);
console.log('allocUnsafe: ' + buf3.toString('hex'));

const buf33 = Buffer.allocUnsafeSlow(10);
console.log('allocUnsafeSlow: ' + buf33.toString('hex'));

const buf4 = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8]);
console.log('from: ' + buf4.toString('hex'));
const buf44 = Buffer.from(buf4, 3, 6); //?? How it work?
console.log('buf44: ' + buf44.toString('hex'));

const buf5 = Buffer.alloc(14, 6, 'hex');
console.log('buf5: ' + buf5.toString('hex'));
const buf55 = Buffer.from(buf5);
console.log('buf55: ' + buf55.toString('hex'));

const buf6 = Buffer.alloc(64, 9);
console.log('buf6: ' + buf6.toString('hex'));
var len = buf6.write('test write index and length.test.test.test.test.test', 5, 30, 'utf8');
console.log('write length: ' + len);
//console.log('write: ' + buf6.toString('hex'));
console.log('write: ' + buf6.toString('utf8'));
console.log('write: ' + buf6.toString('utf8', 2, 20));
console.log('buf6.length: ' + buf6.length);

const buf7 = Buffer.alloc(26);
for (var i = 0; i < 26; i++) {
    buf7[i] = i + 97;
}
console.log(buf7.toString('ascii'));
console.log(buf7.toString('ascii', 0, 8));
console.log(buf7.toString('utf8', 8, 16));
console.log(buf7.toString(undefined, 16, 26));