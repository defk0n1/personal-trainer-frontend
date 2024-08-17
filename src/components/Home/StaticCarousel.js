import Slider from "react-slick";
import review1 from '../../assets/REVIEW1.jpeg';
import review3 from '../../assets/REVIEW3.jpeg';
import review4 from '../../assets/REVIEW4.jpeg';
import review5 from '../../assets/REVIEW5.jpeg';
import review6 from '../../assets/REVIEW6.jpeg';
import review7 from '../../assets/REVIEW7.jpeg';
import review2 from '../../assets/REVIEW2.jpeg';
import review8 from '../../assets/REVIEW8.jpeg';
import review9 from '../../assets/REVIEW9.jpeg';
import review10 from '../../assets/REVIEW10.jpeg';



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/staticcarousel.css"
import { useTranslation } from "react-i18next";

function Carousel() {
    const {t} = useTranslation();

    var settings = {
        className: "center",
        accessibility: true,
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
    
        autoplay:true,
        autoplaySpeed:1000,
        adaptiveHeight:true,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }
   ;
    return (  <>      
    <div className="carousel-title"><h1>{t("messages-title")}</h1></div>

      <div className="slider-container carousel">

        <div className="carousel-sub">
            <p>{t("messages-sub")}</p></div>


        <Slider {...settings}>
          <div className="carousel-img-cont">
          <img src={review1} alt="" className="carousel-img"></img>
          </div>
          <div className="carousel-img-cont" >
          <img src={review2} alt="" className="carousel-img"></img>
          </div>
          <div className="carousel-img-cont">
          <img src={review3} alt="" className="carousel-img"></img>
          </div>
          <div className="carousel-img-cont">
          <img src={review4} alt="" className="carousel-img"></img>
          </div>
          <div className="carousel-img-cont">
          <img src={review5} alt="" className="carousel-img"></img>
          </div>
          <div className="carousel-img-cont">
          <img src={review6} alt="" className="carousel-img"></img>
          </div>
          <div className="carousel-img-cont">
          <img src={review7} alt="" className="carousel-img"></img>
          </div>
          <div className="carousel-img-cont">
          <img src={review8} alt="" className="carousel-img"></img>
          </div>
          <div className="carousel-img-cont">
          <img src={review9} alt="" className="carousel-img"></img>
          </div>
          <div className="carousel-img-cont">
          <img src={review10} alt="" className="carousel-img"></img>
          </div>
        </Slider>
      </div>
      </>  
    );
  }



  export default Carousel;