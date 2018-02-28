var fs = require('fs');
// console.log('Create dir /test');
// fs.mkdir('./test/', function(err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log('Dir created successfully.');
// });

console.log('Search /test dir.');
fs.readdir('./test/', function(err, files) {
    if (err) {
        return console.error(err);
    }
    files.forEach(function(file) {
        console.log(file);
    })
})