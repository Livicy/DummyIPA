import React from 'react'
import {Route, Redirect} from 'react-router-dom'

import {useAuth} from './Auth'

export function UserRoute({component: Component, ...rest}) {
    const {user} = useAuth()

    return (
        <Route
            {...rest}
            render={(props) => {
                return user ? <Component {...props} /> : <Redirect to="/login"/>
            }}
        />
    )
}

export function AdminRoute({component: Component, ...rest}) {
    const {user} = useAuth()

    return (
        <Route
            {...rest}
            render={(props) => {
                return user ? <Component {...props} /> : <Redirect to="/login"/>
            }}
        />
    )
}

export function NonUserRoute({component: Component, ...rest}) {
    const {user} = useAuth()

    return (
        <Route
            {...rest}
            render={(props) => {
                return user ? <Redirect to="/dashboard"/> : <Component {...props} />
            }}
        />
    )
}
