var path = require('path'),
    util = require('util');

// console.log('path.sep: ' + path.sep +
//     '\npath.delimiter: ' + path.delimiter +
//     '\npath.posix: ' + util.inspect(path.posix) +
//     '\npath.win32: ' + util.inspect(path.win32));

console.log('normalization: ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

console.log('joint path: ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

console.log('resolve: ' + path.resolve('pathModule.js'));

console.log('ext name: ' + path.extname('pathModule.js'));
