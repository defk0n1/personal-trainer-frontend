import { Box, Typography, Container } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { useGetClientsQuery } from "../../slices/clientsApiSlice.js"
import Navbar from "../Home/Navbar.jsx"
import { useState } from "react"
import DietOptions from "../Admin/Diet/DietOptions.jsx"
import WorkoutOptions from "../Admin/Workout/WorkoutOptions.jsx"
import SubscriptionOptions from "../Admin/Subscription/SubscriptionOptions.jsx"
import ClientOptions from "../Clients/ClientOptions.jsx"
import WeightOptions from "../Admin/Weight/WeightOptions.jsx"


const ClientsList = () => {

    const {
        data: clients,
        isLoading,
        isSuccess,
        isError,    
        error
    } = useGetClientsQuery('clientsList', {
        pollingInterval: 60000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    const [PageSize , setPageSize] = useState(10)

    const clientsColumns = [
       {field: "fullName",headerName:"Name", width:100},
        {field:"height" ,headerName:"Height", width:100},
        {field:"age" ,headerName:"Age", width:100},
        {field:"level", headerName:"Experience", width:100},
        {field:"goal" ,headerName:"Goal", width:100},
        {field:"active" ,headerName:"Active?", width:100},
        {field:"numofMeals", headerName:"# of meals", width:100},
        {field:"medicalCondition", headerName:"Medical conds", width:100},
        {field:"foodtoAvoid",headerName:"Food to avoid", width:100},
        {field:"supplement" ,headerName:"Supps?", width:100},
        {field:"comment",headerName:"Comment", width:100},
        {field:"password", headerName:"Phone Number", width:100},
        {field:"workoutPlan" ,headerName:"Workout Plan", width:100 ,renderCell : (params) => <WorkoutOptions id={(params.row)}/> },
        {field:"dietPlan",headerName:" Diet Plan", width:100 , renderCell : (params) => <DietOptions id={(params.row)}/> } ,
        {field:"weights",headerName:"Weights", width:100 , renderCell : (params) => <WeightOptions id={(params.row)}/>},

        {field:"createdAt", headerName:"Created At", width:100 , valueGetter: (value) => {
            return value.substring(0,10)
        }},
        {field:"updatedAt",headerName:"Updated At", width:100 , valueGetter: (value) => {
            return value.substring(0,10)
        }
        },
        {field:"subscription",headerName:"PAYMENT", width:100 , renderCell : (params) => <SubscriptionOptions id={(params.row)}/>},
        {field:"options",headerName:"", width:100 , renderCell : (params) => <ClientOptions id={(params.row)}/>},


    ]
    // const content = (<>
    //     {isLoading ? 'Loading...' : isError ? 
        
    //     <Container sx={{py:"0",marginBottom:"20%"}}>
    //      <Typography variant="h4" gutterBottom sx={{color:"red", textAlign:"center"}}>
    //             UNAUTHORIZED         </Typography>
    //      </Container>
        
    //     :
    //     isSuccess ? 
    //     <Box
    //     sx={{
    //             height: 400,
    //             width:"100%",
    //             marginTop:"10vh"
    //         }}>
    //             <Typography variant='h3' component='h3' sx={{textAlign:'center', mt:3,mb:3}}>
    //                 Manage Clients
    //             </Typography>
    //             <DataGrid rows={clientRows} columns={clientsColumns} getRowId={(row)=> row._id} ></DataGrid>

    //     </Box>
    //     }
    //     </>



    // )






    






    let content;
    if(isLoading){
        content = 'Loading';
    }else if(isError){
        content = <Container sx={{py:"0",marginBottom:"20%"}}>
        <Typography variant="h4" gutterBottom sx={{color:"red", textAlign:"center"}}>
               UNAUTHORIZED         </Typography>
        </Container>
    }else if(isSuccess){

        console.log(clients.entities);
        let clientRows = Object.values(clients.entities);
        console.log(clientRows);
        



        content = (<>
        <Navbar/>
        <Box sx={{height:"100vh" ,width: "100vw", display:"flex", flexDirection:"column", justifyContent:'center', alignItems:'center', backgroundColor:'red'}}>
        <Box 
        sx={{
                height: 400,
                width:"90%",
                marginBottom:"10vh"
                
            }}>
                <Typography  variant='h3' component='h3' sx={{textAlign:'center', mt:3,mb:3,color:"white"}}>
                    Manage Clients
                </Typography>
                <DataGrid sx={{backgroundColor:"white"}} rows={clientRows} columns={clientsColumns} getRowId={(row)=> row._id} pageSizeOptions={[5, 10, 25]} pageSize={PageSize} onPageSizeChange={(newPageSize)=>{setPageSize(newPageSize)}} ></DataGrid>

        </Box>
        </Box>
        </>
        )
    }

    return content

}
export default ClientsList