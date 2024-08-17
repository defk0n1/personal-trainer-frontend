import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import arIcon from "../../assets/AR.png";
import enIcon from "../../assets/EN.png";
import frIcon from "../../assets/FR.png";





const languages = [
    {code : "en", lang:"English" , icon:enIcon},
    {code : "fr", lang:"Français",icon:frIcon},
    {code : "ar", lang:"العربية",icon:arIcon}
]





const LangSelector = () =>{
    const {i18n} = useTranslation();
    const changeLanguage = (lang) =>{
        i18n.changeLanguage(lang);
    
    }

    return(
       <>
       {languages.map((lng)=>{
            return(
                <div className={lng.code===i18n.language ? "selected lang" : "lang"}key={lng.code} onClick={()=>changeLanguage(lng.code)}>
                    {lng.lang}
                    <img src={lng.icon}></img>


                </div>
           
            )})}
        
    </>




    )
    
}
;






export default LangSelector;
