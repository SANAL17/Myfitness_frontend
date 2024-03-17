import React from 'react'
import './store.css'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import add_3 from '../Assets/add-3.png'
import add_2 from '../Assets/add-2.png'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  
} from 'mdb-react-ui-kit';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import offer_1 from '../Assets/offer-1.webp'
import offer_2 from '../Assets/offer-2.webp'
import offer_3 from '../Assets/offer-3.webp'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import Footer from '../Components/Footer';

function Store() {
  return (
    <div >
       <MDBNavbar style={{background:'rgb(26, 25, 40)'}}>
      <MDBContainer fluid>
        <MDBNavbarBrand className='text-white mb-2'>
          <a href="/home">         <i class="fa-solid fa-arrow-right-from-bracket fs-3 fa-flip-horizontal text-white mt-3 ms-2"></i>
</a>
        <img style={{width:"150px",marginLeft:'100px'}} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png" alt="" />
        </MDBNavbarBrand>
        <MDBInputGroup style={{marginRight:'100px'}} tag="form" className='d-flex w-auto '>
        <i  class="fa-solid fa-heart fs-3 text-white me-4"></i>
          <i class="fa-solid fa-cart-shopping fs-3 text-white"></i>          
        </MDBInputGroup>
      </MDBContainer>
    </MDBNavbar>

      <div className="container">
     
      <div className='container mt-4'>
         <MDBCarousel showControls showIndicators>
      <MDBCarouselItem itemId={1}>
        <img src= 'https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1312,ar_1312:560/dpr_1.5/image/vm/9410ee1b-bcef-4a22-a7ec-a3ca46eab353.jpg'
         className='d-block w-100 ' style={{height:'400px'}} alt='...' />
      
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src= {add_2}
         className='d-block w-100' style={{height:'400px'}} alt='...' />
       
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src={add_3} className='d-block w-100' 
        style={{height:'400px'}} alt='...' />
        
      </MDBCarouselItem>
    </MDBCarousel>
         </div>
         <div style={{marginLeft:'240px'}} className="search ">
         <div className='d-flex  rounded m-5 text-center'>
          <input  type="text" placeholder='Search for products' className='form-control w-75' />
          <i style={{marginLeft:'-30px'}} class="fa-solid mt-2 fs-5 me-2 fa-magnifying-glass"></i>
        </div>
         </div>
        <div className="offer ">
          <h4 className='text-center text-black'>SHOP BY WORKOUT</h4>
         <div className="row">
          <div className="col-4">
          <img className='offers' src={offer_1} alt="" />

          </div>
          <div className="col-4">
          <img className='offers' src={offer_2} alt="" />

          </div>
          <div className="col-4">
          <img className='offers' src={offer_3} alt="" />

          </div>
         </div>

        </div>
        <div className="all-items m-4">
          <Row className='mt-4'>
            <Col>
            <MDBCard>
            <MDBCardImage style={{width:'300px'}} src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
               <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      price
                 </MDBCardText>
                 <MDBBtn href='#'>Button</MDBBtn>
                </MDBCardBody>
             </MDBCard>
            </Col>
          </Row>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Store