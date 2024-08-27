import "../../styles/prices.css"
import { useTranslation } from 'react-i18next'
import {Link} from "react-router-dom";
import price1 from "../../assets/price1.jpeg"
import price2 from "../../assets/price2.jpeg"
import price3 from "../../assets/price3.jpeg"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";




gsap.registerPlugin(ScrollTrigger);



const Prices = () => {
    const {t} = useTranslation();
    useGSAP(()=>{
        var tl = gsap.timeline({scrollTrigger: {
            trigger: ".prices-wrapper",
            markers: false,
            start: "-10% top",
            end: "30% bottom",
            scrub: 1,}});
        tl.from("#price1", {
            opacity:0,
            duration:1,
            xPercent:-30,
            ease:'power1'


        });
        var tl2 = gsap.timeline({scrollTrigger: {
            trigger: "#price2",
            markers: false,
            start: "-30% top",
            end: "100% bottom",
            scrub: 1,}});
        tl2.from("#price2", {
            opacity:0,
            duration:1,
            xPercent:30,
            ease:'power1'


        });
        var tl3 = gsap.timeline({scrollTrigger: {
            trigger: "#price3",
            markers: false,
            start: "-30% top",
            end: "100% bottom",
            scrub: 1,}});
        tl3.from("#price3", {
            opacity:0,
            duration:1,
            xPercent:-30,
            ease:'power1'


        });
    });
    return (<>
        <div className="features-title">
            <h1>{t("prices-sub")}</h1></div>
        <div className="prices-wrapper">
            <div id="price1" className="price-wrapper">
                <div>
                <h1>{t("1-month")}</h1>
                <p>{t("private-coaching")}</p>
                <p>{t("price-sub")}</p>

                <hr />

                </div>
                <div>

                <h2>150 DT</h2>

                <div className="price-button">
                   <Link to="/signup">{t("booking")}</Link>
                </div>
                </div>



            </div>
            <div id="price1" className="price-image">                <img  alt="" src={price1}></img>
            </div>
            <div id="price2" className="price-image">                <img  alt="" src={price2}></img>
            </div>

            <div id="price2" className="price-wrapper">
                <div>
                <h1>{t("3-month")}</h1>
                <p>{t("private-coaching")}</p>
                <p>{t("price-sub")}</p>

                <hr />

                </div>
                <div>

                <h2>300 DT</h2>

                <div className="price-button">
                   <Link to="/signup">{t("booking")}</Link>
                </div>
                </div>



            </div>
            
            <div id="price3" className="price-wrapper">
                <div>
                <h1>{t("1-year")}</h1>
                <p>{t("private-coaching")}</p>
                <p>{t("price-sub")}</p>

                <hr />

                </div>
                <div>

                <h2>500 DT</h2>

                <div className="price-button">
                   <Link to="/signup">{t("booking")}</Link>
                </div>
                </div>



            </div>
            <div id="price3" className="price-image">
                <img alt="" src={price3}></img>

            </div>

        </div>
    



        </>




    )


}







export default Prices;