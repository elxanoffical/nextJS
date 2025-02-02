import React from 'react'

export default function Home() {

  const data = process.env.API_KEY
  
  console.log(data)
  return (
    
    <div className='container'>
      <h1 className='text-white text-center text-2xl'>Wlcome to Home Page</h1>  
    </div>
  )
}
