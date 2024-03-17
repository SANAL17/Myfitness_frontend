import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBInputGroup
    
  } from 'mdb-react-ui-kit';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import './plan.css'
  import elite1 from '../Assets/elite-1.webp'
  import elite2 from '../Assets/elite-2.jpg'

function Allplans() {
  return (
    <div>
        <MDBNavbar style={{background:'rgb(26, 25, 40)'}}>
      <MDBContainer fluid>
        <MDBNavbarBrand className='text-white mb-2'>
          <a href="/home">         <i class="fa-solid fa-arrow-right-from-bracket fs-4 fa-flip-horizontal text-white mt-3 ms-2"></i>
</a>
        <img style={{width:"130px",marginLeft:'40px'}} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png" alt="" />
        </MDBNavbarBrand>
        
      </MDBContainer>
    </MDBNavbar>
        <div className="container">
            <div style={{width:'1300px',height:'550px', backgroundColor:'rgb(26, 25, 40)', borderRadius:'20px', marginTop:'50px'}} className='elite'>

                <Row>
                    <Col className='text-white'>
                    <h1 style={{fontSize:'60px', margin:'40px 10px 20px 200px',color:'gold'}}>ELITE</h1>
                    <h1 style={{ margin:'40px 10px 20px 100px'}}>> Cardio Workouts</h1>
                    <h1 style={{ margin:'40px 10px 20px 100px'}}>> Full Body Workouts</h1>
                    <h1 style={{ margin:'40px 10px 20px 100px'}}>> Goal Basesd Workouts</h1>
                    <p style={{ margin:'20px 10px 20px 150px', fontSize:'30px'}}> Starting at ₹1208 / month</p>

                    <div className="text-center">
                        <button className='btn btn-white'>
                            Buy Now
                        </button>
                    </div>
                    </Col>
                    <Col>
                    <img style={{width:'500px' , borderRadius:'15px',marginTop:'30px'}} src={elite1} alt="" />
                    <img className='elite-2' src={ elite2} alt="" />
                    </Col>

                </Row>
            </div>
            <div style={{width:'1300px',height:'500px', backgroundColor:'rgb(26, 25, 40)', borderRadius:'20px', marginTop:'50px'}} className='elite'>

                <Row>

                <Col>
                    <img style={{width:'500px' , borderRadius:'15px',marginTop:'50px', marginLeft:'50px'}} src='https://images.pexels.com/photos/4752856/pexels-photo-4752856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
                    <img className='elite-3' src='https://images.pexels.com/photos/4662341/pexels-photo-4662341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
                    </Col>
                    <Col className='text-white'>
                    <h1 style={{fontSize:'60px', margin:'40px 10px 20px 200px', color:'silver'}}>PRO</h1>
                    <h1 style={{ margin:'40px 10px 20px 100px'}}>> Cardio Workouts</h1>
                    <h1 style={{ margin:'40px 10px 20px 100px'}}>> Full Body Workouts</h1>
                    <p style={{ margin:'40px 10px 20px 150px', fontSize:'30px'}}> Starting at ₹1208 / month</p>

                    <div className="text-center">
                        <button className='btn btn-white '>
                            Buy Now
                        </button>
                    </div>
                    

                    </Col>
                    

                </Row>
            </div>
            <div style={{width:'1300px',height:'500px', backgroundColor:'rgb(26, 25, 40)', borderRadius:'20px', marginTop:'50px'}} className='elite'>

                <Row>
                    <Col className='text-white'>
                    <h1 style={{fontSize:'60px', margin:'40px 10px 20px 200px', color:'rgb(141, 107, 173)'}}>HOME</h1>
                    <h1 style={{ margin:'40px 10px 20px 100px'}}>> Cardio Workouts</h1>
                    <h1 style={{ margin:'40px 10px 20px 100px'}}>> Home Workouts</h1>
                    <p style={{ margin:'40px 10px 20px 150px', fontSize:'30px'}}> Starting at ₹1208 / month</p>

                    <div className="text-center">
                        <button className='btn btn-white'>
                            Buy Now
                        </button>
                    </div>

                    </Col>
                    <Col>
                    <img style={{width:'500px' , borderRadius:'15px',marginTop:'50px'}} src='https://images.pexels.com/photos/6455847/pexels-photo-6455847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
                    <img className='elite-4' src='https://images.pexels.com/photos/3775576/pexels-photo-3775576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
                    </Col>

                </Row>
            </div>
        </div>
    </div>
  )
}

export default Allplans