import { useState } from "react"
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from "dayjs";
import { Button, Input } from "@mui/material";
import { useLogNewWeightMutation } from '../../slices/clientsApiSlice.js';
import { useResetWeightsMutation } from '../../slices/clientsApiSlice.js';

import { createTheme, ThemeProvider  } from '@mui/material/styles';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css'

import { toast } from "react-toastify";

const themeOptions = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff0000',
      secondary:'#ffffff'
    },
    secondary: {
      main: '#ffffff',
    },
  },
});




const AddNewWeight = () => {
    const today = new Date()
    const [value, setValue] = useState(dayjs(today));
    const [weight , setWeight] = useState(null)
    const [logNewWeight] = useLogNewWeightMutation()
    const [resetWeights] = useResetWeightsMutation()



    const handleDatePick = (newDate) => {   
        setValue(newDate)
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      try {
      const date = value.format("YYYY-MM-DD")
      console.log({date , weight})
      if(!date || !weight){
        throw new Error("All fields required");
      }
      const res = logNewWeight({date , weight}).unwrap()
      setValue(dayjs(today))
      setWeight(null)
      
    } catch (err) {
      toast("ALL FIELDS REQUIRED")

    }
      
    }
     

    

    const handleReset = () => {
      const res = resetWeights().unwrap()

    }







  return ( <div style={{display: "flex", flexDirection:"row" , justifyContent:"space-between" , width:"100%", alignItems:"center" }}>
      <ThemeProvider theme={themeOptions}>

<LocalizationProvider dateAdapter={AdapterDayjs}>
<DatePicker views={['month', 'day']} label={"Pick date"} value={value} onChange={handleDatePick} sx={{backgroundColor:"white"}}></DatePicker>
</LocalizationProvider>
<Input onChange={(e)=>{setWeight(e.target.value)}} sx={{backgroundColor:"white" ,width:"30%", marginLeft:"2%"}} variant='standard' placeholder="kg" ></Input>
<Button onClick={handleSubmit} sx={{color:"black"}} >Add</Button>
<Button onClick={handleReset} >Reset</Button>
<ToastContainer style={{color:"red"}} progressStyle={{background:"red"}} />

</ThemeProvider>
</div>

  )
}

export default AddNewWeight