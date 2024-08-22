import '../../styles/features.css'
import food from "../../assets/food.jpeg"
import hero from "../../assets/heroo.jpg"
import home from "../../assets/home.png"
import swap from "../../assets/swap.png"
import cart from "../../assets/shopping-cart.png"
import history from "../../assets/history.png"
import { useTranslation } from 'react-i18next'





function Features(){

    const {t} = useTranslation();

    return(
        
        <div className='features-wrapper'>
        <div className="features-title"><h1>{t("features-title")}</h1></div>
                <div className='features-section'>
                    <div className="feature-container">

                        <div className="features-body">
                            <div className="content-wrapper">
                            <h1>{t("workout-title")}</h1>
                            <br />

                            <p>{t("workout-body-1")}
                            <br />
                          </p>
                           
                            <div className="features-icons">
                                <div className="feature-icon">
                                    <img src={history}></img>
                                    <h1>WORKOUT <br /> LOG</h1>
                                </div>
                                <div className="feature-icon">
                                    <img src={swap}></img>
                                    <h1>SWAP OUT<br />
                                    EXERCISES</h1>
                                </div>
                                <div className="feature-icon">
                                    <img src={home}></img>
                                    <h1>HOME <br />OR GYM</h1>
                                </div>
                            </div>
                            </div>
                           
                        </div>
                        <div className="features-img"><img src={hero}/></div>

                    </div>                       
                    <div className="feature-container">
                    <div className="features-img"><img src={food}/></div>

                        <div className="features-body">

                        <div className="content-wrapper">
                            <h1>{t("food-title")}</h1>
                            <br />
                            <p>
                            {t("food-body-1")}
                            </p>                     
                            <br />
                         
                            <div className="features-icons">
                                <div className="feature-icon">
                                    <img src={swap}></img>
                                    <h1>MEAL <br />SWAP</h1>
                                </div>
                                <div className="feature-icon">
                                    <img src={cart}></img>
                                    <h1>SHOPPING <br />LIST</h1>
                                </div>
                               
                            </div>
                            
                            </div>





                        </div>

                    </div>
                </div>
        </div>





















    )








}

export default Features