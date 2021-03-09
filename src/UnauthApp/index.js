import React from 'react'
import { Switch, Route, Redirect, Link} from 'react-router-dom'
import Login from './components/Login'
import Signin from './components/Signin'
import MainPage from './components/MainPage'
import PurchaserProfile from './components/Purchaser/PurchaserProfile'
import VendorProfile from './components/VendorProfile/VendorProfile'
import ListProducts from './components/Purchaser/ListProducts'
import TenderDetails from './components/Purchaser/TenderDetails'


export default function UnauthApp() {
    return (
        <>
            <Link to='/purchaser/item-list'>Lista PRoductos</Link>
            <Link to='/purchaser'>Comprador</Link>
            <Link to='/vendor'>Vendedor</Link>
            <Switch>
                <Route exact path='/purchaser' component={PurchaserProfile} /> 
                <Route exact path='/vendor' component={VendorProfile} /> 
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={Signin} />
                <Route exact path='/tender/:idTender' component={TenderDetails} />
                <Route exact path='/purchaser/item-list' component={ListProducts} />
            </Switch>  
        </>
    )
}
