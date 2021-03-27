import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TenderState from './context/tenders/TenderState'
import AuthState from './context/auth/AuthState'
import AlertState from './context/alerts/AlertState'
import RutaPrivada from './UnauthApp/components/rutas/RutaPrivada'
import { ThemeProvider, theme, CSSReset, ChakraProvider } from '@chakra-ui/react'
import Login from './UnauthApp/components/Login'
import Signin from './UnauthApp/components/Signin'
import MainPage from './UnauthApp/components/MainPage'
import PurchaserProfile from './UnauthApp/components/Purchaser/PurchaserProfile'
import VendorProfile from './UnauthApp/components/VendorProfile/VendorProfile'
import ListProducts from './UnauthApp/components/Purchaser/ListProducts'
import TenderDetails from './UnauthApp/components/CreatedTender/TenderDetails'
import MainNav from './UnauthApp/components/NavBar/MainNav';
import SmallWithLogoLeft from './UnauthApp/components/Footer/SmallWithLogoLeft'


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
