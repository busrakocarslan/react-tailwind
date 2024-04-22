import React, { useState } from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'



export const tryContext=createContext()// componetin içinden eksport edemeyeceğimizden dışında tanımlamalıyız. 

const AuthProvider = (props) => {
  const [user,setUser]= useState("")
  const navigate=useNavigate()
  const login=(info)=>{
    setUser(info)
    navigate("/home")
    
  }
  
  return (
    <tryContext.Provider value={{user,login}}>
      {props.children}

    </tryContext.Provider>
  )
}

export default AuthProvider