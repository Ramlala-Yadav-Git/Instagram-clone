import React from 'react'
import { Avatar } from '@material-ui/core'
import MyLogoImg from "../../Image/Logos/amar pic.jpeg"
import styled from 'styled-components'

const InfoData = {
    imgLogo: MyLogoImg,
    name: "Profile amar",
    userName: "Profile Username"
}

export const Info = () => {
    return (
        <div>
            <InfoContainer>
                <Avatar src={InfoData.imgLogo} className="logo_img" />
                <div className="Info_content">
                    <div className="info_userName">{InfoData.userName}</div>
                    <div className="info_description">{InfoData.name}</div>
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
    & .logo_img{
        min-width: 60px;
        min-height: 60px;
    }
    & .Info_content {
    margin-left: 20px;

    & .info_userName {
        margin: 5px;
        font-weight: bold;
    }
    & .info_description{
        margin: 5px;
    }
    }

`

