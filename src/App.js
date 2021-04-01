
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TenderState from './context/tenders/TenderState'
import AuthState from './context/auth/AuthState'
import AlertState from './context/alerts/AlertState'
import RutaPrivada from './components/rutas/RutaPrivada'
import { ThemeProvider, theme, CSSReset, ChakraProvider } from '@chakra-ui/react'
import Login from './components/Login'
import Signin from './components/Signin'
import MainPage from './components/MainPage'
import PurchaserProfile from './components/Purchaser/PurchaserProfile'
import VendorProfile from './components/VendorProfile/VendorProfile'
import ListProducts from './components/Purchaser/ListProducts'
import TenderDetails from './components/CreatedTender/TenderDetails'
import MainNav from './components/NavBar/MainNav';
import SmallWithLogoLeft from './components/Footer/SmallWithLogoLeft'


export default function App() {
    ////determinar q rutas osn provadas
    
    return (
        <ChakraProvider >
        <CSSReset/>
            <AuthState>
                <TenderState>
                    <AlertState>
                        <Router>
                            <MainNav />
                                <Switch>
                                    <Route exact path='/login' component={Login}/>
                                    <Route exact path='/signup' component={Signin}/>
                                    <Route exact path='/' component={MainPage}/>

                                    <RutaPrivada exact path='/vendor' component={VendorProfile} />
                                    <RutaPrivada  exact path='/purchaser' component={PurchaserProfile} /> 
                                    <RutaPrivada exact path='/tender/:idTender' component={TenderDetails} />
                                    <RutaPrivada exact path='/purchaser/item-list' component={ListProducts} />
                                </Switch>
                            <SmallWithLogoLeft />
                            
                        </Router>
                    </AlertState>
                </TenderState>
            </AuthState>
        </ChakraProvider>
    )
}
