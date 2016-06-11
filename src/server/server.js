var path = require('path');
var express = require('express');
var sql = require('mssql');
var bodyParser = require('body-parser')

var api = require('./controllers');

var app = express();

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', api());

sql.connect("mssql://sa:123@localhost/crm")
    .then(() => {
        console.log('DB connected')
        app.listen(3000, () => console.log('App started'));
    })
    .catch(err => console.error(err));