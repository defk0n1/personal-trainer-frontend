import { Button , Box , Typography , Modal } from '@mui/material'
import { useState } from 'react'
import ClientDetails from './ClientDetails.jsx'
import {useDeleteClientMutation} from '../../slices/clientsApiSlice.js'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css'

import { toast } from "react-toastify";
const ClientOptions = ({id}) => {

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

  const [deleteClient] = useDeleteClientMutation();





  const [open, setOpen] = useState(false);
   
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);
  const handleClientDelete = () =>{
    try {
        const res = deleteClient(id._id);
        console.log("button works")
        toast.success('Client deleted', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    setTimeout(()=>{
        setOpen(!open)


    },2000)
  
        
    } catch (error) {
        toast.error(error)
    }
   
  }

  console.log(id)
  console.log(id._id)



  







  let content
    content = (<>
    
      <ToastContainer/>
      <Button onClick={handleModalOpen} sx={{color:"green"}}>OPTIONS</Button>
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
           <ClientDetails clientData={id}></ClientDetails>
          <Button onClick={handleModalClose} variant="contained" sx={{ mt: 2, bgcolor: 'red', '&:hover': { bgcolor: 'darkred' } }}>
            Close
          </Button>
          <Button onClick={handleClientDelete} variant="contained" sx={{ mt: 2, ml:2, bgcolor: 'black', '&:hover': { bgcolor: 'black' } }}>
            DELETE CLIENT
           </Button>
        </Box>
      </Modal>
      </>
    )
  
 
  

  return (
    content
  )
}

export default ClientOptions