import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import logo from '../../assets/FIREFORCE-4.png';
const Footer = () => {

    const ButtonStyle = {
        paddingTop:"1rem",
        paddingBottom: 'calc(1.7rem + 4vh)',
        textDecoration: 'none',
        color: 'rgb(255, 255, 255)',
        backgroundColor:"red",
        display:"flex",
        justifyContent:"center"
      };
      
      const ButtonAnchorStyle = {
        paddingTop: '1.7rem',
        textDecoration: 'none',
        backgroundColor: '#1A1A1A',
        border: '3px solid #ff0000',
        color: 'white',
        padding: '0.7rem',
        fontFamily: '"Bebas Neue"',
        fontSize: '1.6rem',
        width:"15%",
        textAlign:"center"
       
      };
    const {t} = useTranslation();



  return (<div style={{display:"flex" , flexDirection:"column" , justifyItems:"center"}} >
    <div className="features-title" style={{color:"white", height:"fit-content", paddingTop:"10vh"}}>
        <h1>READY TO</h1><h1 style={{color:"black"}}>CHANGE YOUR LIFE?</h1>
        

        </div>
        <div className="price-button" style={ButtonStyle}>
                   <Link style={ButtonAnchorStyle} to="/signup">GET STARTED NOW!</Link>
        </div>
    <div  style={{backgroundColor:"black" , width:"100%", height:'fit-content',fontSize: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100vw',
  fontFamily: '"Poppins"',
  color:"whitesmoke",
  paddingTop:"5vh"
}
}>          

            <div><img height="90" width="90" src={logo} alt="" ></img></div>
            <p>© FIREFORCE 2024</p>

    </div>


    
        
         </div> )
             }


export default Footer