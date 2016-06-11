var express = require('express');
var dataAcessors = require('./dataAcessors');
var Clients = new dataAcessors.Clients();

module.exports = function router(params) {
    var router = express.Router();

    router.route('/clients')
        .get((request, response) => Clients.getAll()
            .then(result => response.json(result))
            .catch(err => response.send(err)))
        .post((request, response) => Clients.create()
            .then(result => response.json(result))
            .catch(err => response.send(err)));
          
    router.route('/clients/:client_id')
        .get((request, response) => Clients.getById(request.params.client_id)
            .then(result => response.json(result))
            .catch(err => response.send(err)))
        // .put((request, response) => Clients.update(request.body)
        //     .then(result => response.json(result))
        //     .catch(err => response.send(err)))
        .delete((request, response) => Clients.delete(request.params.client_id)
            .then(result => response.json(result))
            .catch(err => response.send(err)))



    return router;
}