/* import React, { useEffect, useContext } from 'react'
import { useHistory, Route } from 'react-router-dom'
import AuthContext from '../../context/auth/AuthContext'

export default function PrivateRoute(props) {

    const context = useContext(AuthContext)
    const { usuario } = context
    const history = useHistory()

    useEffect(() => {
        if(usuario.role === 'User') {
            history.push('app/user')
        }
    }) 

    return (
        <>
            <Route {...props} exact path={ props.address } component={props.view} />
        </>
    )
}
 */