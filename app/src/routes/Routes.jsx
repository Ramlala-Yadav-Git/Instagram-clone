import React from 'react'
import { Route, Switch } from 'react-router'
import { HomePage } from '../components/Home/homePage'
import { ImageInputPart } from '../components/Post/ImageInputPart'
import { PostFirst } from '../components/Post/PostFirst'

export const Routes = () => {
    return (
        <>
            {/* <Stories /> */}
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/viewStory">
                    {/* <ViewStory /> */}
                </Route>
                <Route exact path="/postFirst">
                    <PostFirst />
                </Route>
                <Route exact path="/imageInputPart">
                    <ImageInputPart />
                </Route>
                <Route>
                    <h1>Page not found</h1>
                </Route>
            </Switch>
        </>
    )
}
