var express = require('express');
var dataAcessors = require('./dataAcessors');
var Clients = new dataAcessors.Clients();
var Managers = new dataAcessors.Managers();
var Sources = new dataAcessors.Sources();
var Ranks = new dataAcessors.Ranks();
var Statuses = new dataAcessors.Statuses();
var Orders = new dataAcessors.Orders();
var ServiceCategories = new dataAcessors.ServiceCategories();
var ProductCategories = new dataAcessors.ProductCategories();
var Providers = new dataAcessors.Providers();
var Products = new dataAcessors.Products();
var Services = new dataAcessors.Services();

module.exports = function router(params) {
    var router = express.Router();

    router.route('/clients')
        .get((request, response) => Clients.getAll()
            .then(result => response.json(result))
            .catch(err => response.send(err)))
    // .post((request, response) => Clients.create()
    //     .then(result => response.json(result))
    //     .catch(err => response.send(err)));

    router.route('/clients/:client_id')
        .get((request, response) => Clients.getById(request.params.client_id)
            .then(result => response.json(result))
            .catch(err => response.send(err)))
        // .put((request, response) => Clients.update(request.body)
        //     .then(result => response.json(result))
        //     .catch(err => response.send(err)))
        .delete((request, response) => Clients.delete(request.params.client_id)
            .then(result => response.json(result))
            .catch(err => response.send(err)));

    router.route('/managers')
        .get((request, response) => Managers.getAll()
            .then(result => response.json(result))
            .catch(err => response.send(err)));

    router.route('/managers/:manager_id')
        .get((request, response) => Managers.getById(request.params.manager_id)
            .then(result => response.json(result))
            .catch(err => response.send(err)));

    router.route('/sources')
        .get((request, response) => Sources.getAll()
            .then(result => response.json(result))
            .catch(err => response.send(err)));

    router.route('/sources/:source_id')
        .get((request, response) => Sources.getById(request.params.source_id)
            .then(result => response.json(result))
            .catch(err => response.send(err)));

    router.route('/ranks')
        .get((request, response) => Ranks.getAll()
            .then(result => response.json(result))
            .catch(err => response.send(err)));

    router.route('/ranks/:rank_id')
        .get((request, response) => Ranks.getById(request.params.rank_id)
            .then(result => response.json(result))
            .catch(err => response.send(err)));

    router.route('/statuses')
        .get((request, response) => Statuses.getAll()
            .then(result => response.json(result))
            .catch(err => response.send(err)));

    router.route('/statuses/:status_id')
        .get((request, response) => Statuses.getById(request.params.status_id)
            .then(result => response.json(result))
            .catch(err => response.send(err)));

    router.route('/orders')
        .get((request, response) => Orders.getAll()
            .then(result => response.json(result))
            .catch(err => response.send(err)));

    router.route('/orders/:order_id')
        .get((request, response) => Orders.getById(request.params.order_id)
            .then(result => response.json(result))
            .catch(err => response.send(err)));

    router.route('/serviceCategories')
        .get((request, response) => ServiceCategories.getAll()
            .then(result => response.json(result))
            .catch(err => response.send(err)));

    router.route('/serviceCategories/:category_id')
        .get((request, response) => ServiceCategories.getById(request.params.category_id)
            .then(result => response.json(result))
            .catch(err => response.send(err)));

    router.route('/productCategories')
        .get((request, response) => ProductCategories.getAll()
            .then(result => response.json(result))
            .catch(err => response.send(err)));

    router.route('/productCategories/:category_id')
        .get((request, response) => ProductCategories.getById(request.params.category_id)
            .then(result => response.json(result))
            .catch(err => response.send(err)));

    router.route('/providers')
        .get((request, response) => Providers.getAll()
            .then(result => response.json(result))
            .catch(err => response.send(err)));

    router.route('/providers/:provider_id')
        .get((request, response) => Providers.getById(request.params.provider_id)
            .then(result => response.json(result))
            .catch(err => response.send(err)));

    router.route('/products')
        .get((request, response) => Products.getAll()
            .then(result => response.json(result))
            .catch(err => response.send(err)));

    router.route('/products/:product_id')
        .get((request, response) => Products.getById(request.params.product_id)
            .then(result => response.json(result))
            .catch(err => response.send(err)));

    router.route('/services')
        .get((request, response) => Services.getAll()
            .then(result => response.json(result))
            .catch(err => response.send(err)));

    router.route('/services/:service_id')
        .get((request, response) => Services.getById(request.params.service_id)
            .then(result => response.json(result))
            .catch(err => response.send(err)));


    return router;
}