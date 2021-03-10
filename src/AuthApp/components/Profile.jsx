/* import React, { useEffect, useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthContext from '../../context/auth/AuthContext'
export default function Profile() {

    
    const context = useContext(AuthContext)
    const { usuario } = context
    console.log(usuario)
    return (
        <div>
            <p>Este es el pefil del Admin</p>
            {
                <p>{usuario.firstname}</p>
            }        
        </div>
    )
} */
