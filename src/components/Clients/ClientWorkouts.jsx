import {useGetClientWorkoutPlanQuery} from '../../slices/clientsApiSlice'
import { Container, Typography, Card, CardContent, Grid, List, ListItem, ListItemText,CircularProgress ,Box} from '@mui/material';
import { useTranslation } from 'react-i18next';
import WorkoutVideoModal from './WorkoutVideoModal';

const ClientWorkouts= (id) => {
    const { t } = useTranslation();
     
    // console.log(id)
    
    const { data, isLoading, isError, error } = useGetClientWorkoutPlanQuery(id.data,{refetchOnMountOrArgChange: true});
    const workoutData = isLoading ? [] : isError ? error : data.clientWorkoutPlan[0]
  
    console.log(workoutData)
    const content = (<>
        {isLoading ?<Box sx={{ display: 'flex', alignItems:"center" ,  justifyContent:"center" ,flexDirection:"column", height:"90%"}}>
      <CircularProgress />
    </Box>
 : isError ? 
        
        <Container sx={{py:"0",paddingBottom:"20%"}}>
         <Typography variant="h4" gutterBottom sx={{color:"red", textAlign:"center"}}>
                No workouts set yet   </Typography>
         </Container>
        
        :
        <>
        <div className="features-title" style={{marginTop: "2%"}}><h1>{t("workout-plan")}</h1></div>
         <Container maxWidth="lg"  >

         <Container sx={{}}>
         <Typography variant="h6" sx={{color:"white" , marginTop:"4%"}}>
           {t("diet-plan-name")}: {workoutData.name}
         </Typography>
         <Typography variant="body1"sx={{color:"whitesmoke"}} paragraph>
         {t("diet-plan-description")}: {workoutData.description}
         </Typography>
   
         
         </Container>
         <Grid container sx={{marginTop:"3%"}} spacing={3} >
           {workoutData.days.map((day, dayIndex) => (
             <Grid item xs={12} md={6} key={dayIndex} >
               <Card sx={{"&:hover" :{backgroundColor:"whitesmoke" , color:"red", transition:"ease 1s"} }}>
                 <CardContent>
                   <Typography variant="h6" sx={{color:"red"}}>
                     {day.day}
                   </Typography>
                   <List>
                     {day.exercises.map((exercise, exerciseIndex) => (
                       <ListItem key={exerciseIndex}>
                         <ListItemText primary={exercise.name} secondary={`Sets: ${exercise.sets} - Reps: ${exercise.reps} - Rest: ${exercise.rest} - VidId: ${exercise.vidId}`} />
                         <WorkoutVideoModal vidId = {exercise.vidId}/>
                       </ListItem>
                     ))}
                   </List>
                 </CardContent>
               </Card>
             </Grid>
           ))}
         </Grid>
       </Container>
       </>
        }
        </>



    )



  return ( content )
    // <div style={{width : "90vw", display:"flex" , flexDirection:"column" , justifyItems:"center" ,flexWrap:"wrap" ,justifyContent:"space-between",borderStyle: "solid",
    //     borderWidth: "thin",
    //     borderColor: "#e1e0e0",
    //     borderRadius: "10px",
    //     padding:"1rem",
    //     boxShadow:"box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)",
    //     height:"fit-content",
    //     backgroundColor:"whitesmoke"}}>
           

    //         {content}

            




    //         </div>  )
}

export default ClientWorkouts