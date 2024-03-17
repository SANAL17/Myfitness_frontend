import React, { useState } from 'react'
import banner from '../Assets/banner2.jpg'
import './home.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import headerimg from '../Assets/header-image.png'
import ScrollReveal from 'scrollreveal'
import fitnessimg_1 from '../Assets/fitness 1.webp' 
import fitnessimg_2 from '../Assets/fitness 2.webp'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import carousal_1 from '../Assets/carousal 1.webp'
import carousal_2 from '../Assets/carousal 2.png'
import carousal_3 from '../Assets/carousal 3.jpg'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';


function Home() {

  const [openBasic, setOpenBasic] = useState(false);

 
  return (
    <div className='home'>
     <div className="banner">
        <img className='baner-image'  src={banner} alt="" />
      </div>
      <div className="nav-m">
        <div className="nav-h">
        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png" alt="" />

        </div>
        <ul className='nav-items'>
        <li > <a className='text-white' href="/home">Home</a></li>

        <li > <a className='text-white' href="/plans">Packages</a></li>
          <li > <a className='text-white' href="/store">Store</a></li>
          <li > <a className='text-white' href="">Abou Us</a></li>
        </ul>
        <div className='nav-b'>
          < Link to={'/'}>
          <button class="Btn">
  
           <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
  
          <div class="text">Logout</div>
            </button>
          </Link>
        </div>
      </div>
      <div className="header-image">
      <img width={'100%'} className='header-img' src={headerimg} alt="" />

      </div>
     
      <div className="eleitepass">
        <img className='eleitepass-img' style={{width:'100%'}} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/videoGradientDesktopV2.png" alt="" />
        <div className="header-text text-center">
        <p className='fs-4'>A fitness movement that is worth breaking a sweat for</p>
        <button className='header-btn'>
            EXPLORE NOW
        </button><br />
        <i class="fa-solid mt-4 fa-angle-down fa-bounce"></i>
      </div>
        <Row className='elite-raw'>
          <Row className='row2'>
          <Col style={{width:'400px'}} className='elite-col '>
            <h4 className='mt-3'>cultpass</h4>
            <h2 className='elite-h1 m-2 fs-1'>ELITE</h2>
            <p>Unlimited access to cardio, 
            full body <br /> and goal based workouts</p>
          
          </Col>
          <Col className='elite-col'>
          <h4  className='mt-3'>cultpass</h4>
            <h2 className='elite-h2 m-2 fs-1'>PRO</h2>
            <p>Unlimited access to cardio and <br />
            full body workouts</p>
          </Col>
          <Col className='elite-col'>
          <h4 className='mt-3'>cultpass</h4>
            <h2 className='elite-h3 m-2 fs-1'>HOME</h2>
            <p>Unlimited access to  cardio and home-workouts </p>
          </Col>
          </Row>
        </Row>

      </div>
      <div className='fitness-img '>
         <div className="container">
         <img className='f-img' src={fitnessimg_1} alt="" />
          <img style={{borderTopLeftRadius:'30px',borderBottomLeftRadius:'30px'}} className='f-img' src={fitnessimg_2} alt="" />
         </div>
         <h1 className='f-h1 m-5'>One membership for all <br /> your fitness needs</h1>
         <div className='container'>
         <MDBCarousel showControls showIndicators>
      <MDBCarouselItem itemId={1}>
        <img src= {carousal_1} className='d-block w-100 ' style={{height:'650px'}} alt='...' />
        <div className="carousal-h">
          <h1 className='c-h1'>YOGA</h1>
          <p>Flexbilty-Wellbeing</p>
         <button className='c-button'>
          Explore
         </button>
        </div>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src= {carousal_2} className='d-block w-100' style={{height:'650px'}} alt='...' />
        <div className="carousal-h1">
          <h1 className='c-h2'>SHOP NOW</h1>
          <p>Get flat <span className='c-span'>60 % </span> Offer</p>
          <button>
            Explore 
          </button>
        </div>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src={carousal_3} className='d-block w-100' style={{height:'650px'}} alt='...' />
        <div className="carousal-h2">
          <h1 className='c-h3'>ELITEPASS</h1>
          <p>Purchase ELITE Now</p>
          <button>
            Explore 
          </button>
        </div>
      </MDBCarouselItem>
    </MDBCarousel>
         </div>
         <div className="marquee">
          <div className="m-text text-center m-4">
          <h3 className='fs-1 text-white'>Best in class</h3>
          <h1 style={{fontSize:'60px'}} className='text-warning'>TRAINERS</h1>
          </div>
          <marquee >
           <Row className='marque-raw'>
            <Col className='marque-col'>
            <MDBCardImage style={{width:'300px' , height:'310px'}} src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_310,q_auto:best,dpr_1,g_north_west,f_auto,fl_progressive//image/test/trainer-carousel/trainer-profile/VasudhaStrength.png' fluid alt='...' />
            <div className="marq-text text-white text-center">
              <h2>
              VASUDHA
              </h2>
              <h5>
              Strength
              </h5>
            </div>
            </Col>
            <Col className='marque-col'>
            <MDBCardImage  style={{width:'300px', height:'310px'}} src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_310,q_auto:best,dpr_1,g_north_west,f_auto,fl_progressive//image/test/trainer-carousel/trainer-profile/Anilyoga.png' fluid alt='...' />
            <div className="marq-text text-white text-center">
              <h2>
              ANIL
              </h2>
              <h5>
              Yoga
              </h5>
            </div>

            </Col>
            <Col className='marque-col'>
            <MDBCardImage style={{width:'300px', height:'310px'}} src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_310,q_auto:best,dpr_1,g_north_west,f_auto,fl_progressive//image/test/trainer-carousel/trainer-profile/DivyaYoga.png' fluid alt='...' />
            <div className="marq-text text-white text-center">
              <h2>
              DIVYA
              </h2>
              <h5>
              Yoga
              </h5>
            </div>
            </Col>
            <Col className='marque-col'>
            <MDBCardImage style={{width:'300px', height:'310px'}} src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_310,q_auto:best,dpr_1,g_north_west,f_auto,fl_progressive//image/test/trainer-carousel/trainer-profile/KamalBoxing.png' fluid alt='...' />
            <div className="marq-text text-white text-center">
              <h2>
              KAMAL
              </h2>
              <h5>
              Boxing
              </h5>
            </div>
            </Col>
            <Col className='marque-col'>
            <MDBCardImage style={{width:'300px', height:'310px'}} src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_310,q_auto:best,dpr_1,g_north_west,f_auto,fl_progressive//image/test/trainer-carousel/trainer-profile/SuviniCardio.png' fluid alt='...' />
            <div className="marq-text text-white text-center">
              <h2>
              SUVINI
              </h2>
              <h5>
              Cardio
              </h5>
            </div>
            </Col>
            <Col className='marque-col'>
            <MDBCardImage style={{width:'300px', height:'310px'}} src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_310,q_auto:best,dpr_1,g_north_west,f_auto,fl_progressive//image/test/trainer-carousel/trainer-profile/RiteshStrength.png' fluid alt='...' />
            <div className="marq-text text-white text-center">
              <h2>
              RITESH
              </h2>
              <h5>
              Strength
              </h5>
            </div>
            </Col>
           </Row>
          </marquee>

         </div>
        </div>
        <Footer/>
    </div>
    
  )
}

export default Home