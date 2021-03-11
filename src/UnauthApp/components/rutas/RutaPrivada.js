import React, { Component, useContext, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthContext from '../../../context/auth/AuthContext'

export default function RutaPrivada ( { component: Component,...props } ) {
    
    const authCtx = useContext(AuthContext)

    const { autenticado, usuarioAutenticado } = authCtx

    useEffect(() => {
        usuarioAutenticado()
    }, [])

    return (
        <>

            <Route {...props} render={ props => !autenticado ? 
                <Redirect to='/' />
                : <Component {...props} />
            }/>

        </>
    )
}
