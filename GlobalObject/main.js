console.log(__filename);
console.log(__dirname);
//console.trace();

// process.on('signal', function() { //don't know how it worked.
//     console.log('Signal listened.');
// });

process.on('exit', function(code) {
    console.log('exit listened.');
    setTimeout(function() { console.log('test setTimeout in exit.') }, 0);
    console.log('exit code: ' + code);
});

process.stdout.write('Hello Wrold!\n');
process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
});
var hrtime1 = process.hrtime();
console.log('execPath: ' + process.execPath);
console.log('platform: ' + process.platform);
console.log('memoryUsage: ');
console.log(process.memoryUsage());
console.log('uptime: ' + process.uptime());
console.log('hrtime: ' + process.hrtime(hrtime1));