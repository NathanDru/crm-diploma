import {render} from 'react-dom';
import * as React from 'react';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import App from './components/app';
import Clients from './components/clients.component';

import * as reducers from './reducers';

const store = createStore(
    combineReducers(Object.assign(reducers, {
        routing: routerReducer
    }))
);

const history = syncHistoryWithStore(browserHistory, store)

document.addEventListener('DOMContentLoaded',
    () => render(
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Clients} />
                    <Route path="clients" component={Clients}/>
                </Route>
            </Router>
        </Provider>,
        document.getElementById('root')))