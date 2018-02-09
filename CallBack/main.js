var fs = require('fs');

fs.readFile('input.txt', function(err, data){
  if(err) return console.error(err);
  console.log('Read file Async...\n' + data.toString());
});

var data = fs.readFileSync('input.txt');
console.log('Read file sync...\n'+data.toString());
console.log("End.");