import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import { AuthProvider } from './AuthContext'
import { ThemeProvider, CSSReset, ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'  ///entrada a pagina y rutas segun logeo

ReactDOM.render(
    <AuthProvider>
    <ChakraProvider >
        <CSSReset />
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ChakraProvider>
    </AuthProvider>
    
    , document.getElementById('root'));

serviceWorker.unregister();
