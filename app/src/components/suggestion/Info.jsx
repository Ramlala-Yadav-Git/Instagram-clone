import React, { useEffect } from 'react'
import { Avatar } from '@material-ui/core'
import MyLogoImg from "../../Image/Logos/amar pic.jpeg"
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { GetData } from '../../utils/localStorageData'
import { useHistory } from 'react-router'


export const Info = () => {
    const history = useHistory()
    // const state = useSelector(state => state.user);
    let state = GetData("loginData")
    state = state.data
    // console.log(state);

    const profilePush = () => {
        history.push('/profile')
    }
    return (
        <div>
            <InfoContainer>
                <div className="avt-logo">
                    <Avatar src={state.data && state.data.profilePic} className="logo_img" onClick={profilePush} />
                </div>
                <div className="Info_content" onClick={profilePush}>
                    <div className="info_userName">{state.data && state.data.username}</div>
                    <div className="info_description">{state.data && state.data.fullname}</div>
                </div>
                <div className="switch">
                    switch
                </div>
            </InfoContainer>
        </div>
    )
}

export const InfoContainer = styled.div`
    /* width:300px; */
    /* height:50px; */
    margin-bottom:10px;
    margin-top: 5px;
    display:flex;
    
    & .avt-logo{
        border-radius: 50%;
  text-align: center;
  border: 2px solid transparent;
    background: linear-gradient(orange, violet);
    background-clip: padding-box;
    padding: 3px;
    }
    & .logo_img{
        min-width: 60px;
        min-height: 60px;
        :hover{
            cursor: pointer;
        }
    }
    & .Info_content {
    margin-left: 20px;
    :hover{
            cursor: pointer;
        }

    & .info_userName {
        margin: 5px;
        font-weight: 500;
    }
    & .info_description{
        margin: 5px;
    }
    }
    & .switch{
        color:#0095F6;
    font-weight:600;
    font-size: 12px;
    line-height: 14px;
    padding-left:20%;
    margin:5% 1%;
        :hover{
            cursor: pointer;
        }
    }

`

