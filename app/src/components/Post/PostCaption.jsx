import { Avatar, Button, TextField } from '@material-ui/core'
import axios from 'axios'
import React, { useState } from 'react'
import { Redirect, useHistory } from 'react-router'
import styled from 'styled-components'
import MyLogoImg from "../../Image/Logos/amar pic.jpeg"
import { GetData } from "../../utils/localStorageData"
import { getAllPostData } from '../../redux/AllPosts/action'
import { useDispatch } from 'react-redux'

export const PostCaption = ({ data }) => {
    const [caption, setCaption] = useState("");
    const dispatch = useDispatch()
    const user = GetData("loginData")
    const history = useHistory()
    const InfoData = {
        imgLogo: MyLogoImg,
        name: "Profile amar",
        userName: "Profile Username"
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setCaption(values => ({ ...values, [name]: value }))
    }
    const handleShare = () => {
        if (user.data._id) {
            const payload = {
                caption: caption,
                img: data,
                userId: user.data._id
            }
            // console.log(payload)
            axios.post("http://localhost:8000/posts", payload).then((res) => {
                if (!res.data.data.error) {
                    dispatch(getAllPostData())
                    alert("Post added succesfully")
                    window.location.href = "http://localhost:3000/"
                }
                else {
                    alert(res.data.data.message)
                    console.log(res.data.data.error)
                }
            })
        }
        else {
            alert("Please add fields properly")
        }


    }
    return (
        <>
            <Container>
                <ImageBox>
                    <img src={data} alt="" id="img" className="img" />
                </ImageBox>
                <CaptionBox>
                    <div className="username_info">
                        <Avatar src={InfoData.imgLogo} className="logo_img" />
                        <div className="info_username">{InfoData.userName}</div>
                    </div>


                    <textarea className="text_field" placeholder="Write a caption..."
                        type="text"
                        name="caption"
                        onChange={(e) => setCaption(e.target.value)}
                        value={caption}
                    >

                    </textarea>
                    <Button onClick={handleShare} variant="contained" className="button">Share</Button>
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
    font-size:17px;
    width:98%;
    height: 40vh;
    margin:3% 2%;
    outline: none;
    border: 1px solid #a79d9d9e;
    border-radius: 5px;
   letter-spacing: 1.5px;

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