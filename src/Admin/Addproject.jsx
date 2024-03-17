import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import img from '../Assets/fitness 1.webp'
import { commonAPI } from '../services/commonAPI';
import { addExerciseAPI } from '../services/allAPIs';
import { addExerciseContextAPI } from '../ContextAPI/ContextShare';

function Addproject() {

  const {addExerciseRes,setAddExerciseRes} = useContext(addExerciseContextAPI)

  // to hold token from sessionstorage
  const [token,setToken] = useState("")
  // to get token from sessionstorage
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))

    }

  },[])


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [exerciseDetails,setExerciseDetails] = useState({
      bodypart:"",name:"",target:"",equipment:"",exerciseImage:""
    })

    // image file data into url
    const [preview,setPreview]=useState("")
    console.log(preview);

    useEffect(()=>{
      if(exerciseDetails.exerciseImage){
        setPreview(URL.createObjectURL(exerciseDetails.exerciseImage))
      }
    },[exerciseDetails.exerciseImage])
    console.log(exerciseDetails);

    const exerciseAdd=async()=>{
      const{bodypart,name,target,equipment,exerciseImage}=exerciseDetails
      if(!bodypart || !name || !target || !equipment || !exerciseImage){
        alert("Please fill the form")
      }
      else{
        // api call
        const reqBody= new FormData()
        reqBody.append("bodypart",bodypart)
        reqBody.append("name",name)
        reqBody.append("target",target)
        reqBody.append("equipment",equipment)
        reqBody.append("exerciseImage",exerciseImage)
      
 //       let reqHeader
        // if(token){
        const  reqHeader={
            "Content-Type":"miltipart/form-data",
            "Authorization":`Bearer ${token}` // to send tokrn to client
          };
        
     
      // api call
      const result = await addExerciseAPI(reqBody,reqHeader)
      console.log(result);
      if(result.status == 200){
        alert("Exercise added successfully..")
        setAddExerciseRes(result.data); // context api state value
        console.log(result.data);
        handleClose()
        setExerciseDetails({
          bodypart:"",name:"",target:"",equipment:"",exerciseImage:""
        })
        setPreview("")
      }
      else{
        console.log(result.response.data);
      }
    }
    }

  return (
    <div>
               <button  onClick={handleShow}  className='btn btn-primary m-4 w-25'>Add Now</button>

               <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Exercise Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex'>
            <label>
              <input  onChange={e=>setExerciseDetails({...exerciseDetails,exerciseImage:e.target.files[0]})}  type="file" style={{ display: 'none' }} />
              <img  height={'250px'} src={preview?preview:img} alt="" style={{ width:'300px'}} />
            </label>
            <div className='w-50' style={{ marginLeft: '60px' }}>
              <input value={exerciseDetails.bodypart} onChange={e=>setExerciseDetails({...exerciseDetails,bodypart:e.target.value})}  type="text" placeholder='Body Part' className='form-control mx-4 my-3' />
              <input value={exerciseDetails.name} onChange={e=>setExerciseDetails({...exerciseDetails,name:e.target.value})}   type="text" placeholder='Name' className='form-control mx-4 mb-3' />
              <input value={exerciseDetails.target} onChange={e=>setExerciseDetails({...exerciseDetails,target:e.target.value})}   type="text" placeholder='Target' className='form-control mx-4 mb-3' />
              <input value={exerciseDetails.equipment} onChange={e=>setExerciseDetails({...exerciseDetails,equipment:e.target.value})}  type="text" placeholder='Equipment' className='form-control mx-4 mb-3' />
             
            </div>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={exerciseAdd} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>



    </div>
  )
}

export default Addproject