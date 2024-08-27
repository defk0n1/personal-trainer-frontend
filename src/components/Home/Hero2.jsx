import "../../styles/testHero.css" 
import hero from "../../assets/heroo2.jpeg"
import bg from "../../assets/hero-bg-scaled.jpg"
import { useTranslation } from "react-i18next";
// import Navbar from "./Navbar"
import HeroCard from "./testcard";





const Hero2 = () => {

    const { t } = useTranslation();

    return(
        <>
        {/* <Navbar></Navbar> */}
        <div className="test-bg">
            <img src={bg}></img>
        </div>
            {/* <div className="test-wrapper">
                <div className="test-img"> <img src={hero}></img></div>
                <div className="test-content">
                    <h1>
                    {t("heading")}
                    </h1>
                    <p className="test-sub">
                        {t("hero-sub")}
                    </p>
                    
                    

                    
                    </div>

            </div> */}

                

        <HeroCard></HeroCard>









        </>
    )







}






export default Hero2;