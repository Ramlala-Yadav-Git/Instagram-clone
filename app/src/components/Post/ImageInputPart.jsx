import React, { useState } from 'react'
import { Box, Button, Container, Modal,  Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { shallowEqual, useSelector } from 'react-redux';
import { PostCaption } from './PostCaption';

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

export const ImageInputPart = () => {
	const history = useHistory()
	const [open, setOpen] = React.useState(true);
	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false)
      history.push("/")
	}
	const { data, isLoading, isError } = useSelector(
		(state) => state.postReducer,
		shallowEqual
	);

	const handleBack = ()=>{
		history.goBack()
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
				<BackArrow onClick={handleBack}><svg aria-label="Back" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path></svg></BackArrow>
				<div className="text"><Typography variant="h4" gutterBottom component="div">Compose</Typography></div>
				<div class="cross"><button onClick={handleClose} class="btn-cross" type="button"><div class="QBdPU "><svg aria-label="Close" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M41.1 9.1l-15 15L41 39c.6.6.6 1.5 0 2.1s-1.5.6-2.1 0L24 26.1l-14.9 15c-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1l14.9-15-15-15c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l15 15 15-15c.6-.6 1.5-.6 2.1 0 .6.6.6 1.6 0 2.2z" fill-rule="evenodd"></path></svg></div></button></div>
			  </TopBar>
			  <hr />
			<Container>
			<ComposeCont>
						{/* <img src={data} alt="" id="img" className="img" /> */}
						<PostCaption data={data}/>
			</ComposeCont>
			</Container>			
			</Box>
		  </Modal>
		</>
	  );
	  }
	  

	 export const ComposeCont = styled.div`
			height:40vh;

			& .img{
				height:20%;
			}
	  `

	const BackArrow = styled.div`
		display: inline-block;
    	transform: rotate(270deg);
		:hover{
			cursor: pointer;
		}
	`

	  const TopBar = styled.div`
	  width:100%;
	  display:flex;
	  margin:1%;
	  & .back_arrow{
		  width:5%
	  }
	  & .text{
		  width:95%;
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


