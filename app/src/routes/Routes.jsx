import React from 'react'
import { Route, Switch } from 'react-router'
import { Chat } from '../components/chat/Chat'
import { HomeMain } from '../components/Home/HomeMain'
import Navbar from '../components/navbar/navbar'
import { ImageInputPart } from '../components/Post/ImageInputPart'
import { PostFirst } from '../components/Post/PostFirst'

export const Routes = () => {
    return (
        <>
                <Navbar/>
            <Switch>
                <Route exact path="/">
                    <HomeMain/>
                </Route>
                <Route exact path="/postFirst">  
                    <PostFirst/>
                </Route>
                <Route exact path="/imageInputPart">  
                    <ImageInputPart/>
                </Route>
                <Route exact path="/directMessage">
                    <Chat/>
                </Route>
                <Route>
                    <h1>Page not found</h1>
                </Route>
            </Switch>
        </>
    )
}
