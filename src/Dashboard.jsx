import React from 'react'
import { useParams } from 'react-router-dom'

export default function Dashboard() {
  const params = useParams()
  return (
    <div className='Dashboard'>
      
      <h1>Name: {params?.name}</h1>
      <h1>Email: {params?.email}</h1>
      {/* <h1>Role: {params?.role}</h1>
      <h1>Balance: {params?.balance}</h1>
      <h1>Createdat: {params?.createdat}</h1> */}
    </div>
  )
}
