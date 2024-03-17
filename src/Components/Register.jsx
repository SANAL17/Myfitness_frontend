import React, { useState } from 'react'
import './header.css'
import { MDBInput } from 'mdb-react-ui-kit';
import background from '../Assets/Background.jpeg'
import { Link, useNavigate } from 'react-router-dom';
import { registerAPI } from '../services/allAPIs';



function Register() {
 const navigate = useNavigate()
  const [userData,setUserData]=useState({
    username:"",
    email:"",
    password:""
   })

const registerData = async()=>{

  const {username,email,password}= userData

  if( !username || !email || !password){
    alert("Please fill the form")
  }
   else{
    const result = await registerAPI(userData)
    console.log(result);
    if(result.status==200){
      alert(result.data) // registration  success
      navigate('/login')
    }
    else{
      alert(result.response.data) // allready exist
    }
   }
  console.log(userData);

}


  return (
    <div>
        <div>
        <div className="background">
        <img style={{width:'100%'}} src={background} alt="" />
        </div>
        <div  style={{ left:'38%'}} className="register">
            <div className='text-center m-4'>
                <h1 className='text-white'>Register</h1> 
            </div>
            <div style={{marginTop:'30px'}} className="input mt-5 ">
                <input value={userData.username} onChange={e=>setUserData({...userData,username:e.target.value})} type="text" placeholder='Name' className='form-control  rounded-9' />
            <i style={{marginLeft:'-30px'}} class="fa-solid fa-user mt-2"></i>
            </div>
            <div className='text-center '>
    <div style={{marginLeft:'90px'}} class="radio-button-container mt-3">
  <div class="radio-button mt-3">
    <input type="radio" class="radio-button__input" id="radio1" name="radio-group" />
  <label class="radio-button__label" for="radio1">
    <span class="radio-button__custom"></span>
    Female
  </label>
</div>
<div class="radio-button mt-3">
    <input type="radio" class="radio-button__input" id="radio2" name="radio-group" />
  <label class="radio-button__label" for="radio2">
    <span class="radio-button__custom"></span>
    Male
  </label>
</div>
<div class="radio-button d-flex mt-1">
    <input style={{width:'100px'}} placeholder='AGE' className='form-control text-center' type="number" />
</div>

</div>
		
	</div>
            <div className="input">
            <input value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})} type="email" placeholder='Email' className='form-control  rounded-9' />
            <i style={{marginLeft:'-30px'}} class="fa-solid fa-envelope mt-2"></i>
            </div>
            <div className="input">
            <input value={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})} type="password" placeholder='Password' className='form-control  rounded-9' />
            <i style={{marginLeft:'-30px'}} class="fa-solid fa-lock mt-2"></i>
            </div>
            <div className="remeber-me text-center">
                <label className='text-white ' > <input type="checkbox" className='checkbox m-2 ' />Remeber me </label>
            </div> 
            <div className="text-center m-3">
                <button onClick={registerData} className='btn btn-primary w-25 fs-6'>Register</button>
            <Link to={'/login'}>
            <p className='m-3 fs-6 text-white'>Allready Register ? Please Login Here....</p>
            </Link>

            </div>

        </div>
    </div>
    <div className='auth-btn'>
             <Link to={'/'}>
             <i class="fa-solid fa-arrow-right-from-bracket fs-4 fa-flip-horizontal text-white mt-2 ms-1"></i>

             </Link>
              
            </div>
    </div>
  )
}

export default Register