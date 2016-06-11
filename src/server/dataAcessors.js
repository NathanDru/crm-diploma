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


module.exports.Clients = Clients;
