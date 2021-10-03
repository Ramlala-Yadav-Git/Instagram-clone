import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'
import styles from "./Upload.module.css"
import axios from 'axios'
import { GetData } from "../../utils/localStorageData"
import { useHistory } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UploadModel = () => {
    const [img, setImg] = useState("")
    const [file, setFiles] = useState([]);
    const user = GetData("loginData")
    const history = useHistory()
    const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

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
                // alert("Story added successfully")
                toast.success("Share Succesfully",{
                    position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
                })
                history.push("/")
                
            }
            else {
                alert("Something went wrong")
            }
        })
    }
    const onUpload = () => {
        toast.success("Upload Succesfully",{
            position: "top-left",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
        })
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
           

            <Button variant="contained" color="secondary" loading={loading} loadingPosition="start" onClick={onUpload}>Upload</Button>
            <Button variant="contained" color="primary" loading={loading} loadingPosition="start" className={styles.shareButton} onClick={onSubmit}>Share</Button>

            <ToastContainer 
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover/>
            
        </div>
        
    )
}

