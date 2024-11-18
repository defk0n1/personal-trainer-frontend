import logo from '../../assets/FIREFORCE-3.png';
import '../../styles/Navbar.css'
import { useState } from 'react';
import {Link, useNavigate} from "react-router-dom"
import { useSelector , useDispatch } from 'react-redux';
import { useLogoutMutation } from '../../slices/authApiSlice.js';
import { logout } from '../../slices/authSlice.js';
import LangSelector from './LangSelector.jsx';

export default function Navbar(props) {
    // const toggleButton = document.getElementsByClassName('toggle-button')[0];
    // const navLinks  = document.getElementsByClassName('navli');
    const handleGlobeClick = () => {
        setLangOpen(!langOpen);
      };

   
    
    const handleHamburgerClick = () => {
        setMenuOpen(!menuOpen);
      }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { token } = useSelector((state) => state.auth);

    const [logoutApiCall] = useLogoutMutation();

    const logoutHandler = async () => {
        try {
            if(!token){
                navigate('/login')   
            }
            else{
            await logoutApiCall().unwrap();
            dispatch(logout());
            navigate('/login')
            }
            
        } catch (err) {
            console.log(err)
            
        }
    }
    
    
    
    
    
    
    // const handleLockClick = () => {
    //     if (!userInfo){
    //         logoutHandler();
    //     }
    //     else{
    //         // navigate('/login')
    //         console.log("hi")

    //     }

        
    // }
    

    
    


    const [menuOpen,setMenuOpen] = useState(false);
    const [langOpen,setLangOpen] = useState(false);

    return (<>
        <div className="navbarr">
            <div className={menuOpen ? "navlogo-mobile":"navlogo"}><Link to="/"><img src={logo} alt="" ></img></Link></div>
        <div className={menuOpen ? "navlist-mobile":"navlist"}>
            <div className={menuOpen ? "navli-mobile":"navli"}><a href="">HOME</a></div>
            {/* <div className={menuOpen ? "navli-mobile":"navli"}><a href="">ABOUT</a></div> */}
            <div className={menuOpen ? "navli-mobile":"navli"} style={token ? {} : {display:'none'}}><Link to="/profile">{token ? "PROFILE": ""}</Link></div>
            {/* <div className={menuOpen ? "navli-mobile":"navli"} id={props.bookpage ? "book_button_hidden":"book_button"}><Link to="/booking">BOOK NOW</Link></div> */}
            <div className={menuOpen ? "navli-mobile":"navli"} id="globe" onClick={()=>{handleGlobeClick();}} style={{color:"white"}}>🌏︎</div>
            <div className={menuOpen ? "navli-mobile":"navli"} id="lock" onClick={()=>{logoutHandler()}} style={{color:"white", fontWeight:"bold"}}>{token ? "LOGOUT" : "🔐"}</div>
            
            


            <div href="#" onClick={()=>{handleHamburgerClick()}} className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>
        </div>
      


        <div className={langOpen ? "lang-menu":"hidden"}>
        <p onClick={()=>setLangOpen(!langOpen)} className='close-button'>X</p>

            <LangSelector></LangSelector>

        </div>  
        </>

        
    )
}