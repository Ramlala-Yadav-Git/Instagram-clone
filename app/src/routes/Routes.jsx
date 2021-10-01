import React from 'react'
import { Route, Switch } from 'react-router'
import { Chat } from '../components/chat/Chat'
import { HomeMain } from '../components/Home/HomeMain'
// import { Navbar } from '../components/navbar/navbar'
import { ImageInputPart } from '../components/Post/ImageInputPart'
import { PostFirst } from '../components/Post/PostFirst'
import { SignUp } from "../components/Home/signUp"
import { Login } from "../components/Home/homePage"
import { ViewStory } from '../components/stories/ViewStory'
import Setting from "../components/settings/settings";
import ProfileTop from '../components/profile/profileTop'

export const Routes = () => {
    return (
        <>

            <Switch>
                <Route exact path="/">
                    <HomeMain />

                </Route>
                <Route path="/viewStory/:id">
                    <ViewStory />
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
                <Route path="/profile">
                    <ProfileTop />
                </Route>
                <Route path="/settings">
                    <Setting />
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
