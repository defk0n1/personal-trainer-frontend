import "../../styles/prices.css"
import { useTranslation } from 'react-i18next'
import {Link} from "react-router-dom";







const Prices = () => {
    const {t} = useTranslation();
    return (<>
        <div className="features-title">
            <h1>{t("prices-sub")}</h1></div>
        <div className="prices-wrapper">
            <div className="price-wrapper">
                <h1>{t("1-month")}</h1>
                <p>{t("private-coaching")}</p>
                <hr />
                <h2>$ DT</h2>
                <p>{t("price-sub")}</p>

                <div className="price-button">
                   <Link to="/signup">{t("booking")}</Link>
                </div>



            </div>
            <div className="price-image"></div>
            <div className="price-image"></div>

            <div className="price-wrapper">
                <h1>{t("3-month")}</h1>
                <p>{t("private-coaching")}</p>
                <hr />
                <h2>$$ DT</h2>
                <p>{t("price-sub")}</p>

                <div className="price-button">
                   <Link to="/signup">{t("booking")}</Link>
                </div>


            </div>
            
            <div className="price-wrapper">
                <h1>{t("1-year")}</h1>
                <p>{t("private-coaching")}</p>
                <hr />
                <h2>$$$ DT</h2>
                <p>{t("price-sub")}</p>

                <div className="price-button">
                   <Link to="/signup">{t("booking")}</Link>
                </div>
            </div>
            <div className="price-image"></div>

        </div>
    



        </>




    )


}







export default Prices;