import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { Navbar } from "../navbar/navbar"
import { Stories } from "../stories/Stories"
import { Suggestion } from '../suggestion/Suggestion'
import styled from 'styled-components'
import { Info } from '../suggestion/Info'
import { FeedCard } from "../feed/FeedCard"
import { useDispatch } from "react-redux";
import { getAllPosts } from "../../redux/AllPosts/action";
import { GetData } from '../../utils/localStorageData'
import { Redirect } from 'react-router'

import { AddCommentPosts } from '../../redux/AllPosts/action'
export const HomeMain = () => {
    const [showHeart, setShowHeart] = useState(false)

    const state = useSelector(state => state)
    const [post, setPost] = useState([])
    const dispatch = useDispatch()
    // const { data, loggedData, isLoading, isError } = useSelector(
    //     (state) => state.homeReducer,
    //     shallowEqual
    // );
    const { isLoading, isError, data } = state.posts;
    const loggedUser = GetData("loginData")
    useEffect(() => {
        GetPosts()
        setPost(data)

        console.log(data)

    }, [])
    const handleRender = (payload) => {
        // (GetPosts(payload))
        // //dispatch(AddCommentPosts(payload))
        // console.log(data)
        // console.log(payload)

        const mapped = data.map((el) => el._id === payload.id ? { ...el, comments: [...el.comments, payload] } : el)
        // console.log(mapped, "mapped")
        setPost([...mapped])
        AddCommentPosts(payload)
        //setPost([...data])

    }

    const handleShowHeart = () => {
        setShowHeart(!showHeart)
    }


    const GetPosts = () => {
        dispatch(getAllPosts())

    }

    if (!loggedUser) {
        return <Redirect to="/login" />
    }
    return (
        isLoading ? <LoadingWrapper >
            <img src="https://www.bestnine.co/assets/images/load.gif" alt="" />
        </LoadingWrapper> :
            <div>
                <Navbar />
                <HomePageWrapper>
                    <div>
                        <Stories />


                        {
                            !isLoading && post.length !== 0 && post.map((e) => {
                                return < FeedCard key={e._id} handleShowHeart={handleShowHeart} showHeart={showHeart} username={e.userId.username} userPic={e.userId.profilePic} handleRender={handleRender} img={e.img} id={e._id} userId={loggedUser.data} caption={e.caption} likes={e.likes.length} comments={e.comments} />
                            })
                        }
                        {
                            !isLoading && post.length === 0 && data.map((e) => {
                                return < FeedCard key={e._id} handleShowHeart={handleShowHeart} showHeart={showHeart} username={e.userId.username} userPic={e.userId.profilePic} handleRender={handleRender} img={e.img} id={e._id} userId={loggedUser.data} caption={e.caption} likes={e.likes.length} comments={e.comments} />
                            })
                        }

                    </div>
                    <div>
                        <Info />
                        <Suggestion />
                    </div>
                </HomePageWrapper>
            </div>
    )
}

const HomePageWrapper = styled.div`

display: flex;
justify-content: center;
width: 100%;
margin-top: 80px;
overflow: auto;
padding-left: 10%;

& > :nth-child(1){
    width: 55%;
    display: flex;
    flex-direction: column;
    /* border: 1px solid black; */
    justify-content: center;
}


& > :nth-child(2){
    margin-left: 2%;
    width: 35%;
}
`
const LoadingWrapper = styled.div`
width: 10vw;

margin: auto;
margin-top: 10px;
& > img{
    width: 100%;
    border-radius: 10px;
}
`
