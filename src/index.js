
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import App from './App'  ///entrada a pagina y rutas segun logeo

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
    
    , document.getElementById('root'));

serviceWorker.unregister();
