import React, { useEffect, useState } from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBInputGroup
  
} from 'mdb-react-ui-kit';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import Row from 'react-bootstrap/Row';
import Footer from '../Components/Footer';
import Col from 'react-bootstrap/esm/Col';
import { exerciseOptions, fetchData } from '../Fetch/fetchData';
import Bodyparts from '../Components/Bodyparts';
import { allExerciseAPI } from '../services/allAPIs';
import { baseUrl } from '../services/baseUrl';
import { Link } from 'react-router-dom';
import img1 from '../Assets/bodypart-1.png'
import img2 from '../Assets/bodypart-2.png'

import img3 from '../Assets/bodypart-3.png'



function Plans({setExercise,bodyPart,setBodyPart}) {

   // to call search value
   const [searchkey,setSearchKey]=useState("")
   console.log(searchkey);

  const [allExercise,setAllExercise] = useState([])
  const getAllexercises=async()=>{
    // get token
    const token = sessionStorage.getItem("token")
    console.log(token);
    if(token){
      const reqHeader={
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}` 
      }
      try{
        const result = await allExerciseAPI(searchkey,reqHeader)
      console.log(result);
      if(result.status === 200){
        setAllExercise(result.data)
        console.log(allExercise);

      }else{
        alert("Failed to get exercise")
      }

      }
      catch(e){
        alert(" getting exercise "+ e.message)

      }
      
    
    }

  }
  useEffect(()=>{
    getAllexercises()
  },[searchkey])

  
  const [search,setSearch] = useState("")
  const [bodyParts,setBodyParts] = useState([])

  useEffect(()=>{
    const fetchexerciseData = async ()=>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
      setBodyParts(['all',...bodyPartsData]);

      
    }
    fetchexerciseData();
  },[])
  const handleSearch = async ()=> {
    if(search){
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);


      
      const searchedExercises = exerciseData.filter(
        (exercise)=>
          exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)      
      );
      setSearch('')
      setExercise(searchedExercises);

       console.log(exerciseData);
       
    }
  }
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

    <div className='container mt-4'>
         <MDBCarousel showControls showIndicators>
      <MDBCarouselItem itemId={1}>
        <img src= {img1}
         className='d-block w-100 ' style={{height:'400px'}} alt='...' />
      
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src= {img2}
         className='d-block w-100' style={{height:'400px'}} alt='...' />
       
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src={img3} className='d-block w-100' 
        style={{height:'400px'}} alt='...' />
        
      </MDBCarouselItem>
    </MDBCarousel>
         </div>
    
    <div style={{ margin:'50px 0px 50px 600px'}} className='d-flex'>
      <input onChange={(e)=>setSearchKey(e.target.value)} type="text" placeholder='Search by Bodypart' className='form-control w-50' /><i style={{marginLeft:'-40px'}} class="fa-solid fa-magnifying-glass fs-4 mt-2 "></i>
    </div>

    <div className='crds container'>
    <Row>
      {
        allExercise.length>0? allExercise.map((item,index)=>(
          
          <Col key={index}>

            <Link to={`/view/${item._id}`} >
            
             <MDBCard style={{width:'370px'}} className='m-2'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage style={{width:'370px',height:'300px'}} src={item?`${baseUrl}/uploads/${item.exerciseImage}`:"empty image"}  alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle className='text-black fs-3'> {item.bodypart}</MDBCardTitle>
        <MDBCardText className='text-dark'>  {item.name}      </MDBCardText>
        <MDBCardText className='text-dark'>{item.target}        </MDBCardText>
        <MDBCardText className='text-dark'>{item.equipment}        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
    </Link>
          
          </Col>
        )):
        <div>No Exercise Found </div>
      }
     
    </Row>
    </div>

    <div>
    </div>



    <div>
      <input value={search} onChange={(e)=>setSearch(e.target.value.toLowerCase())}  type="text" placeholder='Exercises' className='form-control w-50'/>
      <button onClick={handleSearch} className='btn btn-primary'>
        Search
      </button>
    </div>
    <div>
      <Bodyparts data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
    </div>
    <Footer/>
    </div>
  )
}

export default Plans