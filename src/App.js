import React, { lazy, Suspense, useContext } from 'react'
import AuthState from './context/auth/AuthState'
import AuthContext from './context/auth/AuthContext'
import Loader from './components/layout/Loader'

const AuthApp = lazy(() => import('./AuthApp'))
const UnauthApp = lazy(() => import('./UnauthApp'))

export default function App() {

    const context = useContext(AuthContext)
    const { autenicado } = context

    return autenicado? (
        <Suspense fallback={<Loader />}>
            <AuthApp />
        </Suspense>
    ) : (
        <Suspense fallback={<Loader />}>
            <UnauthApp />
        </Suspense>
    )
}
