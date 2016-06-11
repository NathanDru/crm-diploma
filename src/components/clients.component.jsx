import * as React from 'react';
import {connect} from 'react-redux';

const ClientsComponent = ({clients}) => (
    <div>
        <h2>Clients page</h2>
        <ul>
            {clients.map(c => <li key={c.id}>{c.name}</li>)}
        </ul>
    </div>
);

export default connect(state => state.clients)(ClientsComponent);