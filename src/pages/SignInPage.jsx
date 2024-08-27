import { useState, useEffect} from "react";
import "../styles/signinpage.css"
import Navbar from "../components/Home/Navbar.jsx";
import bg from "../assets/FIREFORCE-4.png"

import { Link , useNavigate } from 'react-router-dom'
import { useDispatch , useSelector } from "react-redux";
import { useLoginMutation } from "../slices/authApiSlice";
import { setCredentials } from "../slices/authSlice";
import  usePersist  from "../hooks/usePersist.js"


import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css'

import { useTranslation } from 'react-i18next'


import { toast } from "react-toastify";
 







const SignInPage = () => {
    const [fullName, setFullname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [persist , setPersist] = usePersist()
    
    const {t} = useTranslation(); 
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, { isLoading }] = useLoginMutation();

    const { accessToken , clientId } = useSelector((state) => state.auth);

    useEffect(()=>{
        if(accessToken){
            navigate('/');
        }
    }, [navigate, accessToken])

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { accessToken , clientId } = await login({fullName , phoneNumber}).unwrap();
            dispatch(setCredentials({accessToken , clientId}))
            setFullname('')
            setPhoneNumber('')
            

            navigate('/profile')
            
        } catch (err) {
            toast.error(err?.data?.message || err.error)
        }        
    }

    const handleToggle = () => setPersist(prev => !prev)
        
    


    
    


    return(
        <>
<Navbar/>
<ToastContainer/>     

<div style={{ backgroundImage: "url(" + bg + ")"}} class="signin-wrapper">
<form onSubmit={submitHandler}>
    <h1 style={{color:"red"}}>{t("sign-in")}</h1>
    <div class="input-box">
    <p>{t("username")}</p>

    <input className="signin-input" onChange={(e)=>setFullname(e.target.value)} value={fullName} placeholder={t("enter-username")} type="text" id="fullName" name="fullName" required/>
    </div>

    <div class="input-box">
    <p>{t("password")}</p>

    <input className="signin-input"  onChange={(e)=>setPhoneNumber(e.target.value)} placeholder={t("enter-username")} type="password" id="phoneNumber" name="phoneNumber" value={phoneNumber} required/>
    </div>
    <button type="submit" name="submit" className="button">{t("login")}</button>
    <label htmlFor="persist" style={{marginTop:"5px "}}><input style={{margin: "0 5px 0 0"}} type="checkbox" id="persist" onChange={handleToggle} checked={persist}/><p style={{color:'white', margin:"0"}}>{t("stay-logged-in")}</p></label>
</form>
</div>


</>


    )
}






















export default SignInPage;