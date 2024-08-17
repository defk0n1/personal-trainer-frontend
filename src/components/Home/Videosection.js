import "../../styles/videosection.css"
import { useTranslation } from 'react-i18next'
import rocket from "../../assets/rocket.png"
import whatsapp from "../../assets/whatsapp.png"
import credit from "../../assets/credit-removebg-preview.png"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Video from "./video"



gsap.registerPlugin(ScrollTrigger);


function VideoSection(){
    const {t} = useTranslation();
    useGSAP(()=>{
        var tl = gsap.timeline({scrollTrigger: {
            trigger: ".video-container",
            markers: false,
            start: "-10% top",
            end: "-5% top",
            scrub: 5,}});
        tl.from(".div2", {
            opacity:0,
            duration:1,
            xPercent:-30,
            ease:'power1'


        });
        tl.from(".div5",
            {
                opacity:0,
                xPercent:-30,
                duration:1,
                ease:'power1'


            },"-=1"
        );
        tl.from(".div6", {
            opacity:0,
            xPercent:-30,
            duration:1,
            ease:'power1'


        });
        tl.from(".div3", {
            opacity:0,
            xPercent:-30,
            duration:1,
            ease:'power1'


        },"-=1");
        tl.from(".div4", {
            opacity:0,
            xPercent:-30,
            duration:1,
            ease:'power1'


        });
        tl.from(".div7", {
            opacity:0,
            xPercent:-30,
            duration:1,
            ease:'power1'


        },"-=1");
    });

    return(
        <div className="video-container">
            <div className="video-wrapper">
            {/* <video width="40vw" height="" autoPlay >

            <source src="/videos/video1.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
</video> */}
            <Video>

            </Video>
            </div>
            <div className="video-sub">
                <h1>{t("video-sub-title")}</h1>
                <p> {t("video-sub")}
               </p>
               <div className="steps-wrapper">
<div class="div2"><h1>1</h1> {t("payment-title")} </div>
<div class="div3">
<img className="step-img" src={whatsapp} alt="" />

     </div>
<div class="div4"> <h1>3</h1> {t("start-title")} </div>
<div class="div5">
    <img className="step-img" src={credit} alt="" />
</div>
<div class="div6"><h1>2</h1>{t("whatsapp-title")} </div>
<div class="div7"> 
<img className="step-img" src={rocket} alt="" />


</div>

            </div>
            </div>
           
        </div>
        
    
    
    
    
    )
}


export default VideoSection;
