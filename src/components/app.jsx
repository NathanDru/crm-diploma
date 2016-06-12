import * as React from 'react';
import {Link} from 'react-router'

const App = ({children}) => (
    <div>
        <h1>Navigation</h1>
        <ul>
            <li>
                <Link to={'/clients'}>Clients</Link>
            </li>
            <li>
                <Link to={'/orders'}>Orders</Link>
            </li>
        </ul>
        <main>
            {children}
        </main>
    </div>
);

export default App;