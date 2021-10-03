
import React, { useState } from 'react'
import { Box, Button, Input, Modal, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { UploadModel } from './UploadModel';
import { useHistory } from 'react-router';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  bgcolor: 'background.paper',
  border: '1px',
  boxShadow: 24,
  p: 4,
};

export function UploadStory() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const history = useHistory()
  const handleClose = () => {
    setOpen(false);
    history.push('/')
  }

  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <UploadModel/>
        </Box>
      </Modal>
    </div>
  );
}
