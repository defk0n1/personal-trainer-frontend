import { useEffect } from "react";
import Navbar from "../components/Home/Navbar";
import { useGetCurrentClientQuery } from '../slices/clientsApiSlice'
import { useSelector } from "react-redux";
import ClientWeights from "../components/Clients/ClientWeights";
import ClientsDiets from "../components/Clients/ClientsDiets";
import ClientDetails from "../components/Clients/ClientDetails";
import ClientWorkouts from "../components/Clients/ClientWorkouts";

import { ThemeProvider, createTheme } from '@mui/material/styles'
import ErrorPage from "./ErrorPage"



import { Container, Grid, Paper, Box, Typography,CircularProgress } from '@mui/material';


 

const  ClientProfile = () => {
    const selectedKeys = ["active"
        ,"age"
        , "foodtoAvoid"
        , "fullName" 
        , "goal"
        , "height"
        , "level"
        , "medicalCondition" 
        , "numofMeals"
        , "supplement" 
     ]

     const displayKeys = {
        active:"Level of physical activity",
        age:"Age"   ,
        foodtoAvoid: "Food to avoid",
        fullName:"Name"   ,
        goal:"Goal"   ,
        height:"Height"   ,
        level:"Experience level"   ,
        medicalCondition:"Medical conditions"   ,
        numofMeals:"# of meals",
        supplement:"Use of supplements",

     }


    const { clientId } = useSelector((state) => state.auth);
    const { data, isLoading, isError, error } = useGetCurrentClientQuery(clientId,{refetchOnMountOrArgChange: true});

    const weightLogs = isLoading ? [] : isError ? error : data.client.weightLogs.slice().sort((a, b) => new Date(a.date) - new Date(b.date))
    const dietPlan = isLoading ? [] : isError ? error : data.client.dietPlan
    const workoutPlan = isLoading ? [] : isError ? error : data.client.workoutPlan

    const THEME = createTheme({
        typography: {
         "fontFamily": `"Poppins", "Helvetica", "Arial", sans-serif`,
         "fontWeightLight": 300,
         "fontWeightRegular": 400,
         "fontWeightMedium": 500
        }

     });
     
    const content =

    (
        <>

        <Navbar></Navbar>
        {isLoading ? <Box sx={{ display: 'flex', alignItems:"center" ,  justifyContent:"center" ,flexDirection:"column", height:"90vh"}}>
      <CircularProgress />
    </Box>: isError ? <ErrorPage data={error}/> :
        <ThemeProvider theme={THEME}>

        <div style={{backgroundColor: "#18181a", paddingTop:"10vh", paddingBottom:"10vh"}}>
            <Container sx={{backgroundColor:"#18181a", py: 4 }} maxWidth="xlg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6} maxHeight="xlg">
                         <ClientDetails clientData = {data.client}/> 
                    </Grid>
                    <Grid item maxHeight="lg" xs={12} md={6}>
                         <ClientWeights data={weightLogs}/>

                    </Grid>
                </Grid>
            </Container>
            <div style={{backgroundColor:"#18181a",width:"100vw" , height:"fit-content",paddingTop:"10vh",display:"flex",flexDirection:"column" ,justifyContent:"space-evenly"}} >
            <ClientsDiets data={dietPlan}/>

               
            </div>
            <ClientWorkouts data={workoutPlan}/>



        </div>
        </ThemeProvider>

 }
        </>
        )

    return content;
        
    
}



export default ClientProfile;