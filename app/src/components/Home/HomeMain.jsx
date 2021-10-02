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

export const HomeMain = () => {
    const [post, setPost] = useState([])
    const [showHeart, setShowHeart] = useState(false)

    const state = useSelector(state => state)
    const dispatch = useDispatch()
    // const { data, loggedData, isLoading, isError } = useSelector(
    //     (state) => state.homeReducer,
    //     shallowEqual
    // );
    const { isLoading, isError, data } = state.posts;
    useEffect(() => {
        GetPosts()
        // setPost(state.posts)
        // console.log(data)
    }, [])
    const handleRender = () => {
        GetPosts()
    }
    const handleShowHeart = () => {
        setShowHeart(!showHeart)
    }


    const GetPosts = () => {
        dispatch(getAllPosts())
    }
    return (
        <div>
            <Navbar />
            <HomePageWrapper>
                <div>
                    <Stories />

                    {
                        !isLoading && data.map((e) => {
                            return < FeedCard handleShowHeart={handleShowHeart} showHeart={showHeart} username={e.userId.username} userPic={e.userId.profilePic} handleRender={handleRender} img={e.img} id={e._id} userId={e.userId._id} caption={e.caption} likes={e.likes.length} comments={e.comments} />
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
