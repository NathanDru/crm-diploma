class Clients {
    constructor() {
    }
    getAll() {
        return new Promise((resolve, reject) => resolve([1,2,3,3,4,4,4,]));
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