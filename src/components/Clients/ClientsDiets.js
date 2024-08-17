import {useGetClientDietPlanQuery} from '../../slices/clientsApiSlice'
import { Container, Typography, Card, CardContent, Grid, List, ListItem, ListItemText,CircularProgress,Box } from '@mui/material';


const ClientsDiets = (id) => {

    console.log(id)
    
    const { data, isLoading, isError, error } = useGetClientDietPlanQuery(id.data,{refetchOnMountOrArgChange: true});
    const dietData = isLoading ? [] : isError ? error : data.dietPlan[0]
  
    const content = (<>
        {isLoading ? <Box sx={{ display: 'flex', alignItems:"center" ,  justifyContent:"center" ,flexDirection:"column", height:"90%"}}>
      <CircularProgress />
    </Box>: isError ? 
        
        <Container sx={{py:"0",marginBottom:"20%"}}>
         <Typography variant="h4" gutterBottom sx={{color:"red", textAlign:"center"}}>
                No diets set yet         </Typography>
         </Container>
        
        :
        <>
        <div className="features-title"><h1>DIET PLAN</h1></div>

         <Container maxWidth="lg" >
         <Container sx={{}}>
         
         <Typography variant="h6" sx={{color:"white", marginTop:"4%"}}>
           Name: {dietData.name}
         </Typography>
         <Typography variant="body1"sx={{color:"whitesmoke"}} paragraph>
           Description: {dietData.description}
         </Typography>
   
         
         </Container>
         <Grid container sx={{marginTop:"3%"}} spacing={3} >
           {dietData.meals.map((meal, mealIndex) => (
             <Grid item xs={12} md={6} key={mealIndex}>
               <Card sx={{"&:hover" :{backgroundColor:"whitesmoke" , color:"red", transition:"ease 1s"} }}>
                 <CardContent>
                   <Typography variant="h6" sx={{color:"red"}}>
                     {meal.name} ({meal.time})
                   </Typography>
                   <List>
                     {meal.items.map((item, itemIndex) => (
                       <ListItem key={itemIndex}>
                         <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
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

export default ClientsDiets