import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Signin from './components/Signin'
import MainPage from './components/MainPage'
import PurchaserProfile from './components/PurchaserProfile'

export default function UnauthApp() {
    return (
        <>
            <Switch>
                <Route exact path='/' component={PurchaserProfile} /> 
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={Signin} />
            </Switch>  
        </>
    )
}
