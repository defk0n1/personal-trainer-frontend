import { Button , Box , Typography , Modal } from '@mui/material'
import { useState } from 'react'
import AdminClientWeights from './AdminClientWeights';

const WeightOptions = (id) => {

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
    overflow :"auto"
  };

  




  const [open, setOpen] = useState(false);
   
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);


  console.log(id.id.weightLogs)

  const passedLogs = id.id.weightLogs
  const passedId = id.id._id
  console.log(passedId)


console.log(passedLogs)




  let content
    content = (<>
      <Button onClick={handleModalOpen} sx={{color:"red"}}>Open</Button>
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
           <AdminClientWeights data={passedLogs} id={passedId}></AdminClientWeights> 
           <Button onClick={handleModalClose} variant="contained" sx={{ mt: 2, bgcolor: 'red', '&:hover': { bgcolor: 'darkred' } }}>
            Close
          </Button>
        </Box>
      </Modal>
      </>
    )
  

  

  return (
    content
  )
}

export default WeightOptions