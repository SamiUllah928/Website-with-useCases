import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
export default function Signup() {
  let [username, setusername]=useState()
  let [email,setemail]=useState()
  let[ password,setpassword]=useState()
let navigate=useNavigate()

  let handleSignUp=()=>{
navigate('/Login')
    let data={
      username,email,password
    }
    let option={
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        "Content-Type": "application/json"
      }
    }
    fetch('http://localhost:5000/user/signup',option)
    .then((res)=> res.json())
    .then((data)=> console.log(data))
    .catch((error)=> console.log(error))
  }
console.log(username,email,password)
  return (
    <div className="sign-main">
      <div className="sign-sub">
        <div className='Signup'>
          <h1>Signup</h1>
          <input type="text" name="" id="" placeholder='Name'  onChange={(e)=> setusername(e.target.value)}/>
          <input type="email" name="" id="" placeholder='email'  onChange={(e)=> setemail(e.target.value)}/>
          <input type="password" name="" id="" placeholder='password' onChange={(e)=> setpassword(e.target.value)} />
          <button id='btn-sign' onClick={handleSignUp}>SignUp</button>
          <div className="edit-links">
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>

          </div>
        </div>
      </div>
    </div>
  )
}
