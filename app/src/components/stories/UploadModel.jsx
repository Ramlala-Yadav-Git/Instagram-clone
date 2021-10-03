import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'
import styles from "./Upload.module.css"
import axios from 'axios'
import { GetData } from "../../utils/localStorageData"
import { useHistory } from "react-router-dom"
export const UploadModel = () => {
    const [img, setImg] = useState("")
    const [file, setFiles] = useState([]);
    const user = GetData("loginData")
    const history = useHistory()

    const onInputChange = (e) => {
        setFiles(e.target.files[0])
        setFiles(e.target.files[0])
    }
    const onSubmit = (e) => {
        const payload = {
            img: img,
            id: user.data._id,
            userProfile: user.data.profilePic,
            username: user.data.username

        }
        axios.post("http://localhost:8000/story", payload).then((res) => {
            console.log(res.data)
            if (res.data) {
                alert("Story added successfully")
                history.push("/")
            }
            else {
                alert("Something went wrong")
            }
        })
    }
    const onUpload = () => {
        handleSubmit()
    }
    const handleSubmit = () => {

        const data = new FormData();
        data.append("img", file)
        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        };
        // console.log(data, files)
        try {

            axios.post("http://localhost:8000/file", data, config).then((res) => {
                // console.log(res.data.data.img)
                setImg(res.data.data.img)
                // console.log(res.data.data)

            })
        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <div>
            <input type="file" className={styles.customFileInput}
                onChange={onInputChange}
                multiple=""

            />
            <Button onClick={onUpload}>Upload</Button>
            <Button onClick={onSubmit}>Share</Button>
        </div>
    )
}

