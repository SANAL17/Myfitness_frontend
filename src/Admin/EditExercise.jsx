import React, {  useContext, useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import img from '../Assets/fitness 1.webp'
import { commonAPI } from '../services/commonAPI';
import { baseUrl } from '../services/baseUrl';
import { updateExerciseAPI } from '../services/allAPIs';
import { editExerciseContextAPI } from '../ContextAPI/ContextShare';

function EditExercise({project}) {

  const {editExerciseRes,setEditExerciseRes} = useContext(editExerciseContextAPI)
    console.log(project);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [exerciseDetails,setExerciseDetails] = useState({
        id:project._id,
        bodypart:project.bodypart,
        name:project.name,
        target:project.target,
        equipment:project.equipment,
        exerciseImage:""
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

    const updateExercise=async()=>{
      const{id,bodypart,name,target,equipment,exerciseImage}=exerciseDetails
      // if(!bodypart || !name || !target || !equipment || !exerciseImage){
      //   alert("Please fill the form")
      // }
      // else{
        // 
        const reqBody= new FormData()
        reqBody.append("bodypart",bodypart)
        reqBody.append("name",name)
        reqBody.append("target",target)
        reqBody.append("equipment",equipment)
        preview?reqBody.append("exerciseImage",exerciseImage):reqBody.append("exerciseImage",project.exerciseImage)
      // }
      // get token 
      const token = sessionStorage.getItem("token")
      console.log(token);
      if(preview){
        const reqHeader = {
          
          "Content-Type":"multiprat/form-data",
          "Authorization":`Bearer ${token}`

        }
        // Api call
        const result = await updateExerciseAPI(id,reqBody,reqHeader)
        console.log(result);
        if(result.status==200){
          console.log(result.data);  // sccss updatted
          setEditExerciseRes(result.data)
          alert("Updated successfully")
          handleClose()
        }
        else{

          console.log(result.response.data); // err
          setEditExerciseRes(result.response.data)
        
        }

      }else{
        const reqHeader = {
          
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`

        }
        // Api call
        const result = await updateExerciseAPI(id,reqBody,reqHeader)
        console.log(result);
        if(result.status==200){
          console.log(result.data);  // sccss updatted
          setEditExerciseRes(result.data)
          alert("Updated successfully")
          handleClose()
        }
        else{

          console.log(result.response.data); // err
          setEditExerciseRes(result.response.data)
        
        }

      }
    }

  return (
    <div>
         <div>
               <button  onClick={handleShow} >
                          <i class=" fa-solid fa-pen  text-black"></i> 
</button>

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
              <img  height={'250px'} src={preview?preview:`${baseUrl}/uploads/${project.exerciseImage}`} alt="" style={{ width:'300px'}} />
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
          <Button onClick={updateExercise}  variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>



    </div>
    </div>
  )
}

export default EditExercise