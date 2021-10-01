import React from 'react'
import { Route, Switch } from 'react-router'
import { Chat } from '../components/chat/Chat'
import { HomeMain } from '../components/Home/HomeMain'
// import { Navbar } from '../components/navbar/navbar'
import { ImageInputPart } from '../components/Post/ImageInputPart'
import { PostFirst } from '../components/Post/PostFirst'
import { SignUp } from "../components/Home/signUp"
import { Login } from "../components/Home/homePage"

export const Routes = () => {
    return (
        <>
            {/* <Navbar /> */}

            <Switch>
                <Route exact path="/">
                    <HomeMain />

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
                <Route path="/directMessage">
                    <Chat />
                </Route>

                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route>
                    <h1>Page not found</h1>
                </Route>
            </Switch>
        </>
    )
}
