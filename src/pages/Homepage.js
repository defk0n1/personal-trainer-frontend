import '../styles/Homepage.css';
import Navbar from '../components/Home/Navbar';
import Carousel from '../components/Home/Carousel';
import StaticCarousel from '../components/Home/StaticCarousel'
import Features from '../components/Home/Features';
import '../styles/Navbar.css';
import VideoSection from '../components/Home/Videosection';
import Footer from '../components/Home/Footer';
import Prices from '../components/Home/Prices';
import Hero2 from '../components/Home/Hero2'
import 'react-toastify/ReactToastify.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Preloader from '../components/Home/Preloader';
import { Suspense } from 'react';




function Homepage() {

  const [screenLoading, setScreenLoading] = useState(true);

  useEffect(() => {
    
      setTimeout(()=>{
        setScreenLoading(false);

      },4000)
    
  }, []);
  return (screenLoading ? <Preloader/> : <>  
    
    <Navbar bookpage={false}></Navbar>
    <Hero2/>
    {/* <Hero></Hero> */}
    <VideoSection></VideoSection>
    <Carousel></Carousel>
    <StaticCarousel></StaticCarousel>
    <Features></Features>
    <Prices></Prices>
    {/* <Faq></Faq> */}
    <Footer></Footer>

    
    </>
  );
}

export default Homepage;
