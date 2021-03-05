import React, { lazy, Suspense } from 'react'
import { useAuth } from './AuthContext'
import Loader from './components/layout/Loader'

const AuthApp = lazy(() => import('./AuthApp'))
const UnauthApp = lazy(() => import('./UnauthApp'))

export default function App() {

    const [{ user }] = useAuth()

    return user? (
        <Suspense fallback={<Loader />}>
            <AuthApp />
        </Suspense>
    ) : (
        <Suspense fallback={<Loader />}>
            <UnauthApp />
        </Suspense>
    )
}
