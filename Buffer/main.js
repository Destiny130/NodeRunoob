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

const buf4 = Buffer.from([1, 2, 3]);
console.log('from: ' + buf4.toString('hex'));