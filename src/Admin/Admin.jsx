import React, { useState } from 'react'
import { loginAPI } from '../services/allAPIs'
import { useNavigate } from 'react-router-dom'

function Admin() {
 const location = useNavigate()
    const [userData,setUserData]=useState({  
        secretKey:"",  
        email:"",
        password:""
       })
       
       const loginData = async()=>{

        const {secretKey,email,password}= userData
       
        if(!secretKey || !email || !password){
          alert("please fill the form")
        }
        else{
            if(secretKey!="sanal"){
                alert("Invalid key")
    
            }
            else{
                const result = await loginAPI(userData)
                console.log(result);
                if(result.status==200){
                  alert(result.data) // login success
                  location('/admin-dashboard')
                }else{
                  alert(result.response.data) // invalid user
                }
              }
    
            }
         
        console.log(userData);
    
    
      }
console.log(userData);
  return (
    <div>
        <div style={{width:'800px', height:'600px', marginLeft:'500px', marginTop:'100px'}}>
            <input value={userData.secretKey} onChange={e=>setUserData({...userData,secretKey:e.target.value})}  type="password" placeholder='Secret Key' className='form-control w-50 m-4' />
            <input  value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})} type="email" placeholder='Email' className='form-control w-50 m-4' />

            <input value={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})} type="password" placeholder='Password' className='form-control w-50 m-4' />
            <div className=''>
                <button onClick={loginData} className='btn btn-primary'>
                    Login
                </button>
            </div>
        </div>
    </div>
  )
}

export default Admin