import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'
import styles from "./Upload.module.css"
export const UploadModel = () => {
    const [file,setFile] = useState(null) 
    const onInputChange = (e) =>{
        setFile(e.target.files[0])
    }
    const onSubmit = (e) =>{
        const data = new FormData();
        data.append('file',file)
        console.log(data);
    }
    return (
        <div>
            <input type="file" className={styles.customFileInput}
            onChange={onInputChange}
            multiple=""
            
            />
            <Button onClick={onSubmit}>Submit</Button>
        </div>
    )
}

