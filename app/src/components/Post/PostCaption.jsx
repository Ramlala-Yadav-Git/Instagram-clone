import { Avatar, Button, TextField } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import MyLogoImg from "../../Image/Logos/amar pic.jpeg"
export const PostCaption = ({data}) => {

    const InfoData = {
        imgLogo:MyLogoImg,
        name:"Profile amar",
        userName:"Profile Username"
    }
    return (
        <>
            <Container>
                <ImageBox>
                    <img src={data} alt="" id="img" className="img" />
                </ImageBox>
                <CaptionBox>
                <div className="username_info">
                <Avatar src={InfoData.imgLogo} className="logo_img"/>
                <div className="info_username">{InfoData.userName}</div>
                </div>
                {/* <TextField
                    className="text_field"
                    id="standard-multiline-static"
                    label="Write a caption..."
                    multiline
                    rows={28}
                    size="large"
                    variant="standard"
                /> */}
                 <TextField
                 className="text_field"
                    // size="large"
                    // id="standard-search"
                    multiline
                    rows={28}
                    label="Write a caption..."
                    type="search"
                    // variant="standard"
                />
                <Button variant="contained" className="button">Share</Button>
                </CaptionBox>
                </Container>     
        </>
    )
}
const Container = styled.div`
width:100%;
display:flex
`
const ImageBox = styled.div`
text-align:center;
width:62%;
& .img{
    width:50%;
    height:74%;
    align-items:center;
    margin:10vh auto;
}
`

const CaptionBox = styled.div`
width:37%;
font-size:20px;
& .username_info{
    margin-top:0%;
    display:flex;
    & .logo_img{
        width:8%;
        margin:1% 2%;
    }
    & .info_username{
        font-weight:600;
        margin:2%;
        /* font-size:16px;         */
    }
}
& .text_field{
    font-size:14px;
    width:98%;
    margin:3% 2%;
}
& .button{
    display:block;
    border: 1px solid transparent;
    background-color: #0095f6;
    background-color: rgba(var(--d69,0,149,246),1);
    width:98%;
    margin:3% 2%;
    color:white;
    font-size:14px;
}
`