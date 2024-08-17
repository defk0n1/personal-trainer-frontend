import "../../styles/hero.css" 
import hero from "../../assets/heroo.jpg"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {Link} from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/FIREFORCE-3.png"



function Hero() {
    const { t } = useTranslation();
    console.log(t); 
    useGSAP(()=>{
        var tl = gsap.timeline();
        tl.from(".hero-img", {
            opacity:0,
            duration:1,
            ease:'power1'


        });
        tl.from(".hero-heading",
            {
                opacity:0,
                yPercent:-30,
                duration:1,
                ease:'power1'


            }
        );
        tl.from(".hero-sub", {
            opacity:0,
            yPercent:-30,
            duration:1,
            ease:'power1'


        });
        tl.from(".hero-buttons", {
            opacity:0,
            yPercent:-30,
            duration:1,
            ease:'power1'


        });
    });

 

    return(
    <div className="hero-wrapper">
        <div className="hero-content">
            <div className="hero-heading">
                        {t("heading")}
                          </div>
            <div className="hero-sub">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sequi inventore odio. Quis non maxime nulla perspiciatis eaque id sit, nobis earum ut minima, nisi, fugiat iste ratione facilis cupiditate!
            </div>
            <div className="hero-buttons">
            <Link to="/booking">{t("booking")}</Link>

                
            </div>
        </div>
        <div className="hero-img">
            <img src={hero} alt="" />
        </div>


    </div>
    )





}

export default Hero;