import React from 'react'
import { Route, Switch } from 'react-router'
import { HomePage } from '../components/Home/homePage'

export const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route>
                    <h1>Page not found</h1>
                </Route>
            </Switch>
        </>
    )
}
