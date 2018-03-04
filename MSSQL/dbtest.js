var db = require('./db');
db.sql('select * from Genre', function(err, result) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('count: ' + result.length);
});