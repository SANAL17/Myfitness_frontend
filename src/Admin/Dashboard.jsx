import React, { useContext, useEffect } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Addproject from './Addproject';
import { allExerciseAPI, deleteExerciseAPI } from '../services/allAPIs';
import ExerciseCard from './ExerciseCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { addExerciseContextAPI } from '../ContextAPI/ContextShare';
import { editExerciseContextAPI } from '../ContextAPI/ContextShare';


function Dashboard() {
  const {addExerciseRes,setAddExerciseRes} = useContext(addExerciseContextAPI)

  const {editExerciseRes,setEditExerciseRes} = useContext(editExerciseContextAPI)

  // to call search value
  const [searchkey,setSearchKey]=useState("")
  console.log(searchkey);

  // to hold all exercise details
  const [allExercise,setAllExercise] = useState([])

  // api call function

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
  },[addExerciseRes,editExerciseRes,searchkey])

  const deleteExercise = async (pid)=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-type": "application/json",
        "Authorization":`Bearer ${token}`
      }
      const result = await deleteExerciseAPI(pid,reqHeader)
      console.log(result);
      getAllexercises()
      alert("Exercise deleted successfully")
      
    }
  
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div >
      <div className='text-center'>
      <Addproject/>

      </div>



<div>
    <div style={{ margin:'20px 0px 20px 400px'}} className='d-flex'>
      <input onChange={(e)=>setSearchKey(e.target.value)} type="text" placeholder='Search by Bodypart' className='form-control w-75' /><i style={{marginLeft:'-40px'}} class="fa-solid fa-magnifying-glass fs-4 mt-2 "></i>
    </div>

    <Row>
      {
        allExercise.length>0? allExercise.map((item,index)=>(
          <Col key={index} sm={12} md={6} lg={4} xl={3}>
         
          <ExerciseCard exercise={item}/>
          <div className='ms-5'>
            <button style={{width:'260px'}} onClick={()=>deleteExercise(item._id)} className='btn btn-danger '>
              DELETE             <i  class="fa-solid fa-trash m-2  text-white"></i>  
            </button>
            <Bodypart exercise={item}/>

          </div>
         
          </Col>
         

        )):
        <div>No Exercise Found </div>
      }
     
    </Row>
    
</div>
    </div>
  )
}

export default Dashboard