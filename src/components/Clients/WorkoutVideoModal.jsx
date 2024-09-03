import React, { useState } from 'react'
import { Modal,Button , Box} from '@mui/material';



const WorkoutVideoModal = (vidId) => {

    const [open, setOpen] = useState(false);
    const handleModalOpen = () => setOpen(true);
    const handleModalClose = () => setOpen(false);

    
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "70vw",
    height:"70vh",
    bgcolor: 'background.paper',
    border: '2px solid red', // Change border color to red
    boxShadow: 24,
    p: 4,
    overflow :"auto",
    display:'flex',
    flexDirection:'column',
    justifyContent:'center'
  };

    console.log(vidId);





  return (
    <>
      <Button onClick={handleModalOpen} sx={{color:"red"}}>SHOW VIDEO</Button>
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <iframe src="https://drive.google.com/file/d/1F9Z51cK0uowja7v7YkYUrKm1ODMByxDS/preview" width="100%" height="480" allow="autoplay"></iframe> 
          <Button onClick={handleModalClose} variant="contained" sx={{ mt: 2, bgcolor: 'red', '&:hover': { bgcolor: 'darkred' } }}>
            Close
          </Button>
        </Box>
      </Modal>
      </>

  )
}

export default WorkoutVideoModal