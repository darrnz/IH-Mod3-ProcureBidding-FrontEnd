import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import { AuthProvider } from './context/AuthContext'
import TenderState from './context/tenders/TenderState'
import { ThemeProvider, CSSReset, ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'  ///entrada a pagina y rutas segun logeo

ReactDOM.render(
    <TenderState>
    <AuthProvider>
        <ChakraProvider >
            <CSSReset />
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ChakraProvider>
    </AuthProvider>
    </TenderState>
    
    , document.getElementById('root'));

serviceWorker.unregister();
