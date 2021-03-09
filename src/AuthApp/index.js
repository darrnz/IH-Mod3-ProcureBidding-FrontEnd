/* import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Profile from './components/Profile'
import User from './components/User'
import PrivateRoute from './components/PrivateRoute'



export default function AuthApp() {

    const [{ user }] = useAuth()
    console.log(user)

    return (
        <>
            <Switch>
                {   user.role === 'Admin' ? (
                        user.role === 'Purchaser' ? <Redirect to='/app/user' /> 
                        : ( <Route exact path='/app/profile' component={Profile} />
                        ) 
                    ) : (
                        <Route exact path='/app/user' component={User} />
                    )
                }
                {
                    user.role === 'Admin' ? 
                        (<Redirect to='/app/profile' />) 
                        : (<Redirect to='/app/user' />)
                }
            </Switch>
        </>
    )
}
 */