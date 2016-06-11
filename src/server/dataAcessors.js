var sql = require('mssql');
var s = require('squel');


class CRUDAPI {
    constructor(table) {
        this.table = table;
    }
    readAll() {
        return new sql.Request()
            .query(s
                .select()
                .from(this.table)
                .toString());
    }
    readBy(field, value) {
        return new sql.Request()
            .query(s
                .select()
                .from(this.table)
                .where(`${field} = ${value}`)
                .toString());
    }
    deleteBy(field, value) {
        return new sql.Request()
            .query(s
                .delete()
                .from(this.table)
                .where(`${field} = ${value}`)
                .toString());
    }
    create(fields) {
        return new sql.Request()
            .query(s
                .insert()
                .into(this.table)
                .setFields(fields)
                .toString());
    }
    updateByField(fields, field, value){
        return new sql.Request()
            .query(s
            .update()
            .table(this.table)
            .setFields(fields)
            .where(`${field} = ${value}`))
    }
}

class Clients {
    constructor() {
        this.crud = new CRUDAPI('Clients');
        this.idField = 'ID_client';
    }
    getAll() {
        return this.crud.readAll();
    }
    getById(id) {
        return this.crud.readBy(this.idField, id);
    }
    delete(id) {
        return this.crud.deleteBy(this.idField, id);
    }
    create(client) {
        return this.crud.create(client);
    }
    update(client){
       //TODO implement
    }
}

class Managers {
    constructor() {
        this.crud = new CRUDAPI('Managers');
        this.idField = 'ID_manager';
    }
    getAll() {
        return this.crud.readAll();
    }
    getById(id) {
        return this.crud.readBy(this.idField, id);
    }
    delete(id) {
        return this.crud.deleteBy(this.idField, id);
    }
    create(manager) {
        return this.crud.create(manager);
    }
    update(manager){
       //TODO implement
    }
}

class Sources {
    constructor() {
        this.crud = new CRUDAPI('Sources');
        this.idField = 'Source_ID';
    }
    getAll() {
        return this.crud.readAll();
    }
    getById(id) {
        return this.crud.readBy(this.idField, id);
    }
    delete(id) {
        return this.crud.deleteBy(this.idField, id);
    }
    create(source) {
        return this.crud.create(source);
    }
    update(source){
       //TODO implement
    }
}

class Ranks {
    constructor() {
        this.crud = new CRUDAPI('Ranks');
        this.idField = 'Rank_ID';
    }
    getAll() {
        return this.crud.readAll();
    }
    getById(id) {
        return this.crud.readBy(this.idField, id);
    }
    delete(id) {
        return this.crud.deleteBy(this.idField, id);
    }
    create(rank) {
        return this.crud.create(rank);
    }
    update(rank){
       //TODO implement
    }
}

class Statuses {
    constructor() {
        this.crud = new CRUDAPI('Statuses');
        this.idField = 'Status_ID';
    }
    getAll() {
        return this.crud.readAll();
    }
    getById(id) {
        return this.crud.readBy(this.idField, id);
    }
    delete(id) {
        return this.crud.deleteBy(this.idField, id);
    }
    create(status) {
        return this.crud.create(status);
    }
    update(status){
       //TODO implement
    }
}

class Orders {
    constructor() {
        this.crud = new CRUDAPI('Orders');
        this.idField = 'ID_order';
    }
    getAll() {
        return this.crud.readAll();
    }
    getById(id) {
        return this.crud.readBy(this.idField, id);
    }
    delete(id) {
        return this.crud.deleteBy(this.idField, id);
    }
    create(order) {
        return this.crud.create(order);
    }
    update(order){
       //TODO implement
    }
}

class ServiceCategories {
    constructor() {
        this.crud = new CRUDAPI('Service_categories');
        this.idField = 'ID_category';
    }
    getAll() {
        return this.crud.readAll();
    }
    getById(id) {
        return this.crud.readBy(this.idField, id);
    }
    delete(id) {
        return this.crud.deleteBy(this.idField, id);
    }
    create(category) {
        return this.crud.create(category);
    }
    update(category){
       //TODO implement
    }
}

class ProductCategories {
    constructor() {
        this.crud = new CRUDAPI('Product_categories');
        this.idField = 'ID_category';
    }
    getAll() {
        return this.crud.readAll();
    }
    getById(id) {
        return this.crud.readBy(this.idField, id);
    }
    delete(id) {
        return this.crud.deleteBy(this.idField, id);
    }
    create(category) {
        return this.crud.create(category);
    }
    update(category){
       //TODO implement
    }
}

class Providers {
    constructor() {
        this.crud = new CRUDAPI('Providers');
        this.idField = 'Provider_ID';
    }
    getAll() {
        return this.crud.readAll();
    }
    getById(id) {
        return this.crud.readBy(this.idField, id);
    }
    delete(id) {
        return this.crud.deleteBy(this.idField, id);
    }
    create(provider) {
        return this.crud.create(provider);
    }
    update(provider){
       //TODO implement
    }
}

class Products {
    constructor() {
        this.crud = new CRUDAPI('Products');
        this.idField = 'ID_product';
    }
    getAll() {
        return this.crud.readAll();
    }
    getById(id) {
        return this.crud.readBy(this.idField, id);
    }
    delete(id) {
        return this.crud.deleteBy(this.idField, id);
    }
    create(product) {
        return this.crud.create(product);
    }
    update(product){
       //TODO implement
    }
}

class Services {
    constructor() {
        this.crud = new CRUDAPI('Services');
        this.idField = 'ID_service';
    }
    getAll() {
        return this.crud.readAll();
    }
    getById(id) {
        return this.crud.readBy(this.idField, id);
    }
    delete(id) {
        return this.crud.deleteBy(this.idField, id);
    }
    create(service) {
        return this.crud.create(service);
    }
    update(service){
       //TODO implement
    }
}

module.exports.Clients = Clients;
module.exports.Managers = Managers;
module.exports.Sources = Sources;
module.exports.Ranks = Ranks;
module.exports.Statuses = Statuses;
module.exports.Orders = Orders;
module.exports.ServiceCategories = ServiceCategories;
module.exports.ProductCategories = ProductCategories;
module.exports.Providers = Providers;
module.exports.Products = Products;
module.exports.Services = Services;