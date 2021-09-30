import React, { useState } from 'react'
import { Box, Button, Input, Modal,  Typography } from '@material-ui/core';
import styled from 'styled-components';
import { ComposeCont, ImageInputPart } from './ImageInputPart';
import { useHistory } from 'react-router-dom';
import {shallowEqual, useSelector, useDispatch} from 'react-redux'
import { storePhoto } from '../../redux/postImage/PostAction';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height:'110%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  border:"0px solid white",
  p: 4,
};

// useEffect(() => {
//   handleActivities()
// }, [])


export const PostFirst = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  
  const { data, isLoading, isError } = useSelector(
    (state) => state.postReducer,
    shallowEqual
  );

    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [photo,setPhoto] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')
    const  imageHandler = (e) => {
      const reader = new FileReader();
      reader.onload = () =>{
        if(reader.readyState === 2){
          // console.log(reader);
        setPhoto(reader.result)
        }
      }
      reader.readAsDataURL(e.target.files[0])
      };
      
      const handleActivities = () =>{
        dispatch(storePhoto(photo))
      }
      const handlePhoto = (e) => {
        handleActivities()
        history.push("/imageInputPart");
    }

    return (
      <>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <TopBar>
              <div className="back_arrow"></div>
              <div className="text"><Typography variant="h4" gutterBottom component="div">New Post</Typography></div>
              <div class="cross"><button onClick={handleClose} class="btn-cross" type="button"><div class="QBdPU "><svg aria-label="Close" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M41.1 9.1l-15 15L41 39c.6.6.6 1.5 0 2.1s-1.5.6-2.1 0L24 26.1l-14.9 15c-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1l14.9-15-15-15c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l15 15 15-15c.6-.6 1.5-.6 2.1 0 .6.6.6 1.6 0 2.2z" fill-rule="evenodd"></path></svg></div></button></div>
            </TopBar>
            <hr />
            
            <ImageInput>
            <svg aria-label="Icon to represent media such as images or videos" class="_8-yf5 " color="#262626" fill="#262626" height="77" role="img" viewBox="0 0 97.6 77.3" width="96"><path d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" fill="currentColor"></path><path d="M84.7 18.4L58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5l-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z" fill="currentColor"></path><path d="M78.2 41.6L61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6l-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z" fill="currentColor"></path></svg>
            <Typography className="input_label" component="div">Drag photos and videos here.</Typography>
            {/* {!haveData?<Input type="file"accept="image/*" name="image-upload"/>:<ImageInputPart/>} */}
            <ComposeCont>
					<input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} onSelect={(e)=>{handlePhoto(e)}}/>
          <button onClick={handlePhoto}>aa</button>
			</ComposeCont>
            </ImageInput>
          </Box>
        </Modal>
      </>
    );
  }

const TopBar = styled.div`
    width:100%;
    display:flex;
    margin:1%;
    & .back_arrow{
        width:5%
    }
    & .text{
        width:90%;
        margin-bottom:-1%;
        text-align:center;
    }
    & .cross{
        width:5%;

        & .btn-cross{
            background-color:white;
            border:0;
        }
    }
`

const ImageInput = styled.div`
    align-items:center;
    text-align:center;
    margin-top:30vh;

    & .input_label{
        font-size:23px;
        color:#999;
    }
`