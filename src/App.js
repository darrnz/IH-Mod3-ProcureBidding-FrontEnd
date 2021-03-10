import React, { useContext } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import TenderState from './context/tenders/TenderState'
import AuthState from './context/auth/AuthState'
import AlertState from './context/alerts/AlertState'
import tokenAuth from './services/token'
import RutaPrivada from './UnauthApp/components/rutas/RutaPrivada'
import { ThemeProvider, CSSReset, ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import Login from './UnauthApp/components/Login'
import Signin from './UnauthApp/components/Signin'
import MainPage from './UnauthApp/components/MainPage'
import PurchaserProfile from './UnauthApp/components/Purchaser/PurchaserProfile'
import VendorProfile from './UnauthApp/components/VendorProfile/VendorProfile'
import {
    Box, Flex, Text,IconButton, Button,Stack,Collapse,Icon, Popover,PopoverTrigger,PopoverContent,MobileNav, DesktopNav,
    useColorModeValue,useBreakpointValue,useDisclosure,} from '@chakra-ui/react';
import { HamburgerIcon,CloseIcon,ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import ListProducts from './UnauthApp/components/Purchaser/ListProducts'
import TenderDetails from './UnauthApp/components/Purchaser/TenderDetails'
import AuthContext from './context/auth/AuthContext'
import MainNav from './UnauthApp/components/NavBar/MainNav';

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
                    <RutaPrivada  exact path='/vendor' component={VendorProfile} />
                    <Route exact path='/purchaser' component={PurchaserProfile} /> 
                    <Route exact path='/' component={MainPage} />
                    <Route exact path='/tender/:idTender' component={TenderDetails} />
                <Route exact path='/purchaser/item-list' component={ListProducts} />
                </Switch>
            </Router>
        </AlertState>
        </TenderState>
        </AuthState>
        </ChakraProvider>
    )
}
