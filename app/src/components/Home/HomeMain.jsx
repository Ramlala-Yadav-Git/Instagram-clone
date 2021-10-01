import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { Navbar } from "../navbar/navbar"
import { Stories } from "../stories/Stories"
import { Suggestion } from '../suggestion/Suggestion'
import styled from 'styled-components'
import { Info } from '../suggestion/Info'

export const HomeMain = () => {

    const { data,loggedData, isLoading, isError } = useSelector(
        (state)=>state.homeReducer,
        shallowEqual
    );

    useEffect(() => {
        setTimeout(()=>{
            console.log(loggedData);
        },1000)
    }, [])
    return (
        <div>
            <Navbar />
            <HomePageWrapper>
                <div>

                    <Stories />
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
overflow: hidden;
padding-left: 10%;




& > :nth-child(1){
    width: 55%;
}
& > :nth-child(2){
    margin-left: 2%;
    width: 35%;
}
`
