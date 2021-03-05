import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Signin from './components/Signin'
import MainPage from './components/MainPage'

export default function UnauthApp() {
    return (
        <>
          <Switch>
            <Route exact path='/' component={MainPage} /> 
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signin} />
          </Switch>  
        </>
    )
}
