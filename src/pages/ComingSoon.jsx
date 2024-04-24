import React from 'react'
import { useNavigate } from "react-router-dom"

const ComingSoon = () => {
  const navigate=useNavigate()
  return (
    <div className='bg-gray-300 w-screen h-screen pt-28 '>
      
      <img src='./cominsoon2.png' className=' w-80 m-auto shadow-2xl shadow-red-900 rounded-tl-3xl rounded-br-3xl mt-5'/>
      <button className='bg-red-900 text-center m-auto block mt-5 p-5 rounded-full text-white font-bold' onClick={()=>navigate(-1)}> Go Back </button>
      
    </div>
  )
}

export default ComingSoon