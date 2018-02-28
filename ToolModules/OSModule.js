var os = require('os'),
    util = require('util');

console.log('tmpdir: ' + os.tmpdir());
console.log('endianness: ' + os.endianness());
console.log('hostname: ' + os.hostname());
console.log('type: ' + os.type());
console.log('platform: ' + os.platform());
console.log('arch: ' + os.arch());
console.log('release: ' + os.release());
console.log('uptime: ' + os.uptime());
console.log('loadavg: ' + os.loadavg());
console.log('total memory: ' + os.totalmem() + ' bytes.');
console.log('free memory: ' + os.freemem() + ' bytes.');
console.log('cpus: ' + util.inspect(os.cpus()));
console.log('networkInterfaces: ' + util.inspect(os.networkInterfaces()));
