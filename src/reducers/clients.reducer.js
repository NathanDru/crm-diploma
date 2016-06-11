import {RECEIVE_CLIENTS} from './../actions/clients.actions';

export default function clientsReducer(state = { clients: [] }, action) {
    switch (action.type) {
        case RECEIVE_CLIENTS:
            return Object.assign({}, state, {clients: action.payload});
        default:
            return state;
    }
}
