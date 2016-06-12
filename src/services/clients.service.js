import * as ajax from './ajax';

const URL = '/api/clients'

export function getClients() {
    return ajax.getJson(URL);
}
