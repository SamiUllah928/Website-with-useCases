import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Login() {
  let navigate = useNavigate()
  let [email, setemail] = useState()
  let [password, setpassword] = useState()
  let [errar, seterrar] = useState()





  let handleLoGin = async () => {
    try {
      let mylog = await axios.post('http://localhost:5000/user/login', { email, password })
      console.log(mylog)
      // navigate(`/Dashboard/${mylog.data.data.email}/${mylog.data.data.password}`)
    } catch (error) {
      seterrar(error.response.data.message)
    }
  }

  // let handleLoGin=()=>{
  //   let data={
  //     email,password
  //   }
  //   let option={
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers:{
  //       "Content-Type": "application/json"
  //     }
  //   }
  //   fetch('http://localhost:5000/user/login',option)
  //   .then((res)=> res.json())
  //   // .then((data)=> console.log(data))
  //   .then((data)=> navigate(`/Dashboard/${data.data.username}/${data.data.email}/${data.data.role}/${data.data.balance}/${data.data.createdat}`))
  //   .catch((error)=> console.log(error))
  // }
  if (errar) {
    setTimeout(() => {
      seterrar(0)
    }, 2000);
  }
  return (
    <div className='Login'>
      <div className="sign-main">
        <div className="sign-sub">
          <div className='Signup'>
            <h1>Login</h1>
            <p style={{visibility: errar ? 'visible' :'hidden'}}>{errar}:</p>
            <input type="email" name="" id="" placeholder='email' onChange={(e) => setemail(e.target.value)} />
            <input type="password" name="" id="" placeholder='password' onChange={(e) => setpassword(e.target.value)} />
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
