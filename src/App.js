import React from 'react'
import './App.css'
import Variable from './Header/Variable'
import Home from './Home/Home'
import Footer from './Footer/Footer'
import Signup from './Sign/Signup'
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Login from './Sign/Login'
import Dashboard from './Dashboard'
export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Variable/>
      <Routes>
      <Route path='/Dashboard/:name/:email' element={<Dashboard/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/footer' element={<Footer/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>


    </div>
  )
}
