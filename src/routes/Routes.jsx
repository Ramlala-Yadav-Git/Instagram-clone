import React from 'react'
import { Route, Switch } from 'react-router'
import { HomeMain } from '../components/Home/HomeMain'

export const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <HomeMain/>
                </Route>
                <Route>
                    <h1>Page not found</h1>
                </Route>
            </Switch>
        </>
    )
}
