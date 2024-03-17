
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../services/allAPIs'
import background from '../Assets/Background.jpeg'
import { MDBRadio } from 'mdb-react-ui-kit';
import './pages.css'


function Auth({ register }) {

  const location = useNavigate()

  const [userData, setUserData] = useState({
    userType: "",
    secretkey: "",
    username: "",
    email: "",
    password: ""
  })


  const registerData = async () => {

    if (userData.userType == 'Admin' && userData.secretkey !== 'sanal') {
      alert('Invalid Admin')
    }
    else {
      const { username, email, password } = userData
      if (!username || !email || !password) {
        alert('Please fill the form')
      } else {
        const result = await registerAPI(userData)
        console.log(result);
        if (result.status == 200) {
          alert(result.data)
          location('/login')
        } else {
          alert(result.response.data)
        }
      }
    }
  }


  const loginData = async () => {
    const { email, password } = userData
    if (!email || !password) {
      alert('Please fill the form')
    } else {
      const result = await loginAPI(userData)
      console.log(result);
      if(result.status==200){
        if (result.status == 200&&userData.userType=='Admin') {
          alert('Login successful')
          sessionStorage.setItem("existingUser",JSON.stringify(result.data.user))
          sessionStorage.setItem("token",result.data.token)
          location('/admin-dashboard'
          
          
          
          
          
          
          )
        } else {
          alert('login succesful ')
          location('/home')
        }
      }else{
        alert('Invalid data')
      }
     
    }
  }
  console.log(userData);


  const isRegisterForm = register ? true : false
  return (
    <div className=' '>
      <div className="background">
        <img style={{width:'100%'}} src={background} alt="" />
        </div>
        <div className="goback">
        <a href="/">         <i class="fa-solid fa-arrow-right-from-bracket fs-4 fa-flip-horizontal text-white m-2"></i></a>
        </div>
      
      <div className="container">              
          <div className="register"  >
            {/* content */}
            <h4 className='text-center text-primary'>
              {
                isRegisterForm ? <h1 className='text-white m-3'>Register </h1>  : <h1 className='text-white m-3'>Login</h1>
              }
            </h4>
            <form >
              <div style={{ paddingLeft:'75px'}} className=' m-3 d-flex '>
                <p className='text-white'>Register As :</p>
                <p className='text-white ms-3'>User</p>
                <MDBRadio className='ms-2 mt-2' name='UserType' id='radioNoLabell' value='User' aria-label='...' onChange={(e) => setUserData({ ...userData, userType: e.target.value })} />              
                <p className='text-white ms-3'>Admin</p>

               <MDBRadio className='ms-2 mt-2' name='UserType' id='radioNoLabell' value='Admin' aria-label='...'                   onChange={(e) => setUserData({ ...userData, userType: e.target.value })} />

                
              </div>
              {userData.userType == "Admin" ?
                <div>
                  <input  type="text"
                    className='form-input form-control'
                    placeholder='secret key'
                    style={{ width:'400px', backgroundColor: "whitesmoke",margin:'20px 20px 20px 50px' }}
                    onChange={(e) => setUserData({ ...userData, secretkey: e.target.value })}
                  />
                </div> : null}

              {
                isRegisterForm &&
                <input type="text" value={userData.username} placeholder='username' onChange={e => setUserData({ ...userData, username: e.target.value })} className='form-input  form-control  '  
                 style={{ width:'400px', backgroundColor: "whitesmoke",margin:'20px 20px 20px 50px' }}

                />
              }
              <input type="email" value={userData.email} placeholder='email' onChange={e => setUserData({ ...userData, email: e.target.value })} className='form-input form-control  ' 
                               style={{ width:'400px', backgroundColor: "whitesmoke",margin:'20px 20px 20px 50px' }}
                               />
              <input type="password" value={userData.password} placeholder='password' onChange={e => setUserData({ ...userData, password: e.target.value })} className='form-input  form-control  '
                               style={{ width:'400px', backgroundColor: "whitesmoke",margin:'20px 20px 20px 50px' }}
                               />

            </form>

            {
              isRegisterForm ?
                <div className='text-center mx-5'>

                  <button className='btn btn-info m-2' onClick={registerData}  >Register</button>
                  <Link to={'/login'} style={{ textDecoration: "none" }}>
                    <p className='text-white m-2' >Already Registered? Please login from here...</p>
                  </Link>
                </div>
                :

                <div className='text-center'>
                  <button className='btn btn-info m-2' onClick={loginData} >Login</button>
                  <Link to={'/register'} style={{ textDecoration: "none" }} >
                    <p className='m-2 text-white'>New to here? Please Register...</p>
                  </Link>
                </div>


            }
          </div>       
        
      </div>
    </div>
  )
}

export default Auth