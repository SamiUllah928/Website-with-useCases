import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Header({ a, b, c, d, e }) {
    let navigate=useNavigate()
    let handlesignup=()=>{
        navigate('/Signup')
    }
    let handellogin=()=>{
        navigate('/Login')
    }
    let handleabout=()=>{
        navigate('/Footer')
    }
    let handlehome=()=>{
        navigate('/')
    }
    return (
        <div className='Header'>
            <div className="logo">
                <img src="data:image/png;base64,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" alt="Something went wrong" />
            </div>
            <div className="links">
               <ul>
                <li onClick={handlehome}>{a}</li>
                <li>{b}</li>
                <li>{c}</li>
                <li onClick={handleabout}>{d}</li>
                <li>{e}</li>
               </ul>
            </div>
            <div className="btn-inout">
                <button onClick={handlesignup}>Signup</button>
                <button onClick={handellogin}>Login</button>
            </div>
        </div>
    )
}
