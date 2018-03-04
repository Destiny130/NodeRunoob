const sql = require('mssql')

sql.connect("mssql://sa:External3.5@localhost/PlanetWrox").then(function() {
    new sql.Request().query('select *from Genre').then(function(recordset) {
        console.log(recordset);
    }).catch(function(err) {
        console.error(err);
    });
}).catch(function(err) {
    console.error(err);
});