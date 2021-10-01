import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { Navbar } from "../navbar/navbar"
import { Stories } from "../stories/Stories"
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
            <Stories />
        </div>
    )
}
