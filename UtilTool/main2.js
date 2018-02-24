var util = require('util');

function Person() {
    this.name = 'Lawerence';
    this.toString = function() {
        return this.name;
    };
}

var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true, null, false));

// var tt = util.isDate(Date());
// console.log('tt: ' + tt);