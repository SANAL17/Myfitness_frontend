import React, { useEffect, useState } from 'react'
import { OneExerciseAPI } from '../services/allAPIs';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../services/baseUrl';
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import Footer from '../Components/Footer';

function OneExercise() {
    const {id}=useParams()
    console.log(id);


    const [oneExercise,setOneExercise]= useState({})
    const getOneExercise=async()=>{
              
          try{
            const result = await axios.get(`${baseUrl}/exercise/get-one-exercise/${id}`)
          console.log(result);
          if(result){
            setOneExercise(result.data)
            console.log(oneExercise);
    
          }else{
            alert("Failed to get exercise")
          }
    
          }
          catch(e){
            alert("failed getting exercise "+ e.message)
    
          }
          
        
        
    
      }

      useEffect(()=>{
        getOneExercise()
      },[])
  return (
    <div>
        <MDBNavbar style={{background:'rgb(26, 25, 40)'}}>
      <MDBContainer fluid>
        <MDBNavbarBrand className='text-white mb-2'>
          <a href="/plans">         <i class="fa-solid fa-arrow-right-from-bracket fs-4 fa-flip-horizontal text-white mt-3 ms-2"></i>
</a>
        <img style={{width:"130px",marginLeft:'40px'}} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png" alt="" />
        </MDBNavbarBrand>
        
      </MDBContainer>
    </MDBNavbar>

    <div className='container'>
        <Row>
            {
                
                    <div className=''>
                    <Col>
                 <img style={{width:'1000px', height:'700px' , marginLeft:'150px'}} src={oneExercise?`${baseUrl}/uploads/${oneExercise.exerciseImage}`:"empty image"} alt="" />
                 </Col>
                 <Col  className='text-center'>
                 <h1 style={{color:'rgb(26, 25, 40)',fontSize:'50px'}} className='m-3'>
                 Bodypart : {oneExercise.bodypart}
               
                 </h1>
                    
                
                 <p style={{color:'rgb(26, 25, 40)',fontSize:'45px'}} className='text- '> Name : {oneExercise.name}</p>

                 <p style={{color:'rgb(26, 25, 40)',fontSize:'45px'}} className='text- '>Target : {oneExercise.target}</p>
                 <p style={{color:'rgb(26, 25, 40)',fontSize:'45px'}} className='mb-5'>Equipment : {oneExercise.equipment}</p>
                 </Col>

                </div>

               
               
                 

            }
           
        </Row>




    </div>
    <Footer/>
    </div>
  )
}

export default OneExercise