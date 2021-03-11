import React, { Component, useContext, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthContext from '../../../context/auth/AuthContext'
import TenderContext from '../../../context/tenders/TenderContext'

export default function RutaPrivada ( { component: Component,...props } ) {
    
    const authCtx = useContext(AuthContext)

    const { autenticado, usuarioAutenticado, usuario } = authCtx
    

    const ctxTender = useContext(TenderContext)
    const { tenders, listUserTenders } = ctxTender
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
