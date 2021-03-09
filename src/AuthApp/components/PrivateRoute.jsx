import React, { useEffect } from 'react'
import { useHistory, Route } from 'react-router-dom'


export default function PrivateRoute(props) {

    //const [{ user }] = useAuth()
    const history = useHistory()

  /*   useEffect(() => {
        if(user.role === 'User') {
            history.push('app/user')
        }
    }) */

    return (
        <>
            <Route {...props} exact path={ props.address } component={props.view} />
        </>
    )
}
