import { Button , Box , Typography , Modal } from '@mui/material'
import { useState } from 'react'
import EditDiet from './EditDiet';
import CreateDiet from './CreateDiet';

const DietOptions = ({id}) => {

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

  console.log(id)


  







  let content
  if(!id.dietPlan){
    content = (<>
      <Button onClick={handleModalOpen} sx={{color:"red"}}>ADD</Button>
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
           <CreateDiet id={id._id}></CreateDiet>
          <Button onClick={handleModalClose} variant="contained" sx={{ mt: 2, bgcolor: 'red', '&:hover': { bgcolor: 'darkred' } }}>
            Close
          </Button>
        </Box>
      </Modal>
      </>
    )
  }
  else{
    content = (<>
      <Button onClick={handleModalOpen} sx={{color:"blue"}}>EDIT</Button>
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <EditDiet id={id.dietPlan}></EditDiet>
          <Button onClick={handleModalClose} variant="contained" sx={{ mt: 2, bgcolor: 'red', '&:hover': { bgcolor: 'darkred' } }}>
            Close
          </Button>
        </Box>
      </Modal>
      </>




    )
  }

  

  return (
    content
  )
}

export default DietOptions