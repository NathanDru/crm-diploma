import {getJson} from './../services/ajax'

export const REQUEST_CLIENTS = 'REQUEST_CLIENTS';

export function requestClients() {
    return {
        type: REQUEST_CLIENTS,
    }
}

export const RECEIVE_CLIENTS = 'RECEIVE_CLIENTS';

export function receiveClients(clients) {
    return {
        type: RECEIVE_CLIENTS,
        payload: clients,
    }
}

export function fetchClients() {
    return dispatch => {
        dispatch(requestClients());
        getJson('api/clients')
            .then(clients => dispatch(receiveClients(clients)));
    }
}