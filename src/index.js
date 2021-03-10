import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import * as serviceWorker from './serviceWorker';

import TenderState from './context/tenders/TenderState'
import AuthState from './context/auth/AuthState'
import AlertaState from './context/alerts/AlertState'


import tokenAuth from './services/token'
import { ThemeProvider, CSSReset, ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'  ///entrada a pagina y rutas segun logeo

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
    
    , document.getElementById('root'));

serviceWorker.unregister();
