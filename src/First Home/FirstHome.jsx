
import React, { useState } from 'react'
import banner from '../Assets/banner2.jpg'
import './first.css'
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
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
} from 'mdb-react-ui-kit';

function FirstHome() {

    
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
        <ul className='nav-first'>
          <li>
          </li>
          
        </ul>
        <div className='nav-button'>
            <a href="/login">
            <button>login</button>

            </a>
        </div>
      </div>
      <div className="header-image">
      <img width={'100%'} className='header-img' src={headerimg} alt="" />

      </div>
     
      <div className="eleitepass">
        <img className='eleitepass-img' style={{width:'100%'}} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/videoGradientDesktopV2.png" alt="" />
        <div className="header-text text-center">
        <p className='fs-4'>A fitness movement that is worth breaking a sweat for</p>
        <a href="/login">
        <button className='header-btn'>
            EXPLORE NOW
        </button><br />
        </a>       
        <i class="fa-solid mt-4 fa-angle-down fa-bounce"></i>
      </div>
        <Row className='elite-raw'>
            <a href="/login">
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
            full body workouts</p>          </Col>
          <Col className='elite-col'>
          <h4 className='mt-3'>cultpass</h4>
            <h2 className='elite-h3 m-2 fs-1'>HOME</h2>
               
            <p>Unlimited access to  cardio and home-workouts </p>
       </Col>
          </Row>
            </a>
          
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
          <a href="/register">
          <button className='c-button'>
          Explore
         </button>
          </a>
         
        </div>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src= {carousal_2} className='d-block w-100' style={{height:'650px'}} alt='...' />
        <div className="carousal-h1">
          <h1 className='c-h2'>SHOP NOW</h1>
          <p>Get flat <span className='c-span'>60 % </span> Offer</p>
          <a href="/register">
          <button className='c-button'>
          Explore
         </button>
          </a>
        </div>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src={carousal_3} className='d-block w-100' style={{height:'650px'}} alt='...' />
        <div className="carousal-h2">
          <h1 className='c-h3'>ELITEPASS</h1>
          <p>Purchase ELITE Now</p>
          <a href="/register">
          <button className='c-button'>
          Explore
         </button>
          </a>
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

        <MDBFooter style={{backgroundColor:'rgb(26, 25, 41)'}} className=' text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
    </div>
    
  )
}

export default FirstHome