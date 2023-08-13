import React from 'react'
import { useParams } from 'react-router-dom'

export default function Dashboard() {
  const params=useParams()
  return (
    <div className='Dashboard'>
        <h1>{params?.username}</h1>
        <h1>{params?.email}</h1>
        <h1>{params?.password}</h1>
    </div>
  )
}
