import {render} from 'react-dom';
import * as React from 'react';

import App from './components/app';

document.addEventListener('DOMContentLoaded',
    () => render(React.createElement(App), document.getElementById('root')))