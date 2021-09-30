import React from 'react'
import { Route, Switch } from 'react-router'
import { HomePage } from '../components/Home/homePage'
import { ViewStory } from "../components/stories/ViewStory"
import { Stories } from "../components/stories/Stories"

export const Routes = () => {
    return (
        <>
            <Stories />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/viewStory">
                    <ViewStory />
                </Route>
                <Route>
                    <h1>Page not found</h1>
                </Route>
            </Switch>
        </>
    )
}
