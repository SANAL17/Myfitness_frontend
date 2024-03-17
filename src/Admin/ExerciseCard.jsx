import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
import { baseUrl } from '../services/baseUrl';
import EditExercise from './EditExercise';
import { deleteExerciseAPI } from '../services/allAPIs';



function ExerciseCard({exercise}) { 
     console.log(exercise);
     

     

  return (
    <div>
        <MDBCard className='m-4' style={{width:'300px', height:'450px'}}>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage style={{width:"300px",height:'250px'}} src={exercise?`${baseUrl}/uploads/${exercise.exerciseImage}`:"empty image"} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>    
        <MDBCardBody>
        <MDBCardTitle className='text-black' >
        {exercise?.bodypart}
        </MDBCardTitle>
        <MDBCardTitle className='text-black'>{exercise?.equipment}</MDBCardTitle>
        <MDBCardText className='text-black'>{exercise?.name}</MDBCardText>
        <MDBCardText className='text-black'>{exercise?.target}</MDBCardText>
       
        <div className='text-center'> 
          <i className='btn'>
            <EditExercise project={exercise}/>
          </i>
         
        </div>

     


        
      </MDBCardBody>
    </MDBCard>
    </div>
  )
}

export default ExerciseCard