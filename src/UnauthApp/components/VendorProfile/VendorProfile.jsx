import React, { useContext, useEffect } from 'react'

import AuthContext from '../../../context/auth/AuthContext'

export default function VendorProfile(props) {

    const authContext = useContext(AuthContext)
    const { usuario } = authContext;

    /*   useEffect (() => {
        let roles = usuario.role
        if(roles === 'Admin') 
            props.history.push('/vendor')
    },[]) */

    return (
        <div>

            HolaVendor
        </div>
    )
}
