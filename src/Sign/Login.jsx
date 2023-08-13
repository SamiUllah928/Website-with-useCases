import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  let navigate=useNavigate()
  let [email,setemail]=useState()
  let [password,setpassword]=useState()

  let handleLoGin=()=>{
    let data={
      email,password
    }
    let option={
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        "ContentType": "application/json"
      }
    }
    fetch('http://localhost:5000/user/login',option)
    .then((res)=> res.json())
    .then((data)=> console.log(data))
    .catch((error)=> console.log(error))
  }
  
  return (
    <div className='Login'>
        <div className="sign-main">
        <div className="sign-sub">
        <div className='Signup'>
          <h1>Login</h1>
          <input type="email" name="" id="" placeholder='email'  onChange={(e)=>setemail(e.target.value) }/>
          <input type="password" name="" id="" placeholder='password' onChange={(e)=> setpassword(e.target.value)}/>
          <button id='btn-sign' onClick={handleLoGin}>Login</button>
          <div className="edit-links">
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>

          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
