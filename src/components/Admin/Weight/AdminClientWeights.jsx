
import { LineChart } from '@mui/x-charts';
import AddNewWeight from './AddNewWeight.jsx';
import dayjs from "dayjs";
import { Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';



const AdminClientWeights = ({data , id}) => {


    const {t} = useTranslation(); 
    const weightLogs = data
    console.log(weightLogs)
    const dateAxis =[]
    const weightAxis =[]
    console.log(`current client id is ${id}`)


    if(weightLogs){
        for (let i = 0; i < weightLogs.length; i++) {
            dateAxis[i]=new Date(weightLogs[i].date.substr(0, 10));
            weightAxis[i]=weightLogs[i].weight;


          }
          console.log(dateAxis)
          console.log(weightAxis)

    
    }
   

  return (
    <Paper
    sx={{
      padding: '2rem',
      borderRadius: '10px',
      boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      backgroundColor: 'whitesmoke',
      height:'80vh'
    }}
  >
<Typography variant="h4" sx={{color:"red",marginBottom:"5%"}}>{t("weight-progress")}</Typography>
<Typography style={{color:"grey"}}>{t("weight-progress-sub")}</Typography>
<div style={{height:"70%"}}>
<LineChart
  xAxis={[{
    label: "Date",
    data: dateAxis,
    color: '#ffffff',
    tickInterval: dateAxis,
    scaleType: 'time',
    valueFormatter: (date) => dayjs(date).format("YYYY MMM D"),
  }]}
  series={[
    {
      color: '#ff0000',
      data: weightAxis,
      label:"Weight (kg)"
    },
  ]}
  grid={{ vertical: true, horizontal: true }}
  title='Weight progress'
  />
  </div>
<AddNewWeight id={id}/>
</Paper>

  )
}

export default AdminClientWeights