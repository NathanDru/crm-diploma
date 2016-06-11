var express = require('express');
var sql = require('mssql');

module.exports = function router(params) {
    var router = express.Router();

    router.route('/clients')
        .get((request, response) => new sql.Request()
            .query(`select * from Clients`)
            .then(result => response.json(result))
            .catch(err => response.send(err)))
        .post((request, response) => new sql.Request()
            .query(`insert into Clients (ID_manager, FIO) values (1, '${request.body.fio}')`)
            .then(result => response.json(result))
            .catch(err => response.send(err)))

    return router;
}