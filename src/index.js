import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './../node_modules/bulma/css/bulma.min.css';
import './global.css';



ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
