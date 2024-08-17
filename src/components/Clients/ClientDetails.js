import { Container, Grid, Paper, Box, Typography } from '@mui/material';




const ClientDetails = ({ clientData }) => {

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


    if (clientData) {
        return(
<Paper container
      sx={{
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        backgroundColor: 'whitesmoke',
        height:'80vh',
        display:'flex',
        flexDirection:'column',
        
    }}
    >
        <Typography variant="h4" style={{color:"red" , marginBottom:"5%"}}>Profile details</Typography>

    
      <Grid container spacing={2}>
        {Object.entries(clientData).map(([key, value]) => {
          if (selectedKeys.includes(key)) {
            return (
              <Grid  item xs={5} sm={6} key={key}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="subtitle1" fontWeight={700}>
                    {displayKeys[key]}:
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {value}
                  </Typography>
                </Box>
              </Grid>
            );
          }
          return null;
        })}
      </Grid>
    </Paper>
)



        // return (
        //     <div style={{width : "50vw", display:"flex" , flexDirection:"column" , justifyItems:"center" ,flexWrap:"wrap" ,justifyContent:"space-between",borderStyle: "solid",
        //         borderWidth: "thin",
        //         borderColor: "#e1e0e0",
        //         borderRadius: "10px",
        //         padding:"1rem",
        //         boxShadow:"box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)",
        //         height:"calc(90vh - 4rem)",
        //         backgroundColor:"whitesmoke"}}>
        //                       <h1 style={{color:"red"}}>Welcome {clientData.fullName}! </h1>
                              
        //                       {
        //                           Object.entries(clientData).map(([key,value])=>{
        //                               if(selectedKeys.includes(key)){
        //                                   return( 
        //                                       <div style={{display:"flex" , flexDirection:"row", width:"50%"}}>
        //                                           <p style={{fontSize:"1.25em" , fontWeight: 700}}>{displayKeys[key] +':'} &nbsp;  </p> 
        //                                           <p  style={{fontSize:"1.25em", color:"grey"}}>{value} </p> 
        //                                           <hr/>
                                                  
        //                                       </div> 
        //                                   )
        //                               }
        //                           })
        //                       }
        //                   </div>
        // )

    } else return null
}


export default ClientDetails