import React, { useState } from 'react'
import './header.css'
import { MDBInput } from 'mdb-react-ui-kit';
import background from '../Assets/Background.jpeg'
import { Link, useNavigate } from 'react-router-dom';
import { loginAPI } from '../services/allAPIs';

function Login() {
  const location = useNavigate()

  const [userData,setUserData]=useState({    
    email:"",
    password:""
   })


  const loginData = async()=>{

    const {email,password}= userData
    if(!email || !password){
      alert("please fill the form")
    }
    else{
      const result = await loginAPI(userData)
      console.log(result);
      if(result.status==200){
        alert("Login Successfull") // login success
        sessionStorage.setItem("existingUser",JSON.stringify(result.data.user))
        location('/home')
      }else{
        alert(result.response.data) // invalid user
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
        <div style={{height:'400px' , left:'38%'}} className="register">
            <div className='text-center m-4'>
                <h1 className='text-white'>Login</h1> 
            </div>
            
          
            <div  className="input">
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
                <button onClick={loginData} className='btn btn-primary w-25 fs-6'>Login</button>
                <Link to={'/register'}>
                <p className='m-3 fs-6 text-white'>New to here ? Please Register Now....</p>

                </Link>

            </div>
           

        </div>
        <div className='auth-btn'>
             <Link to={'/'}>
             <i class="fa-solid fa-arrow-right-from-bracket fs-4 fa-flip-horizontal text-white mt-2 ms-1"></i>
             </Link>
             <a href="/admin-login">
             <button className='btn btn-success'>
             Admin
             </button>
             </a>
              
            </div>

    </div>
    </div>
  )
}

export default Login