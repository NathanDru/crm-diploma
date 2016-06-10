var express = require('express');
var sql = require('mssql');

var app = express();

app.get('/api/clients', (request, response) => new sql.Request()
    .query(`select * from Clients`)
    .then(result => response.json(result))
    .catch(err => response.send(err)));

sql.connect("mssql://sa:123@localhost/crm")
    .then(() => {
        console.log('DB connected')
        app.listen(3000, () => console.log('App started'));
    })
    .catch(err => console.error(err));