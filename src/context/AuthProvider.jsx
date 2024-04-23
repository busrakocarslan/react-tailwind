import React, { useState } from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'



export const AuthContext=createContext()// componetin içinden eksport edemeyeceğimizden dışında tanımlamalıyız. 

const AuthProvider = (props) => {
  const [user,setUser]= useState(false)
  const navigate=useNavigate()
  const login=(info)=>{
    setUser(info)
    navigate("/dashboard")
    
  }
  const logOut=()=>setUser()
  console.log(logOut);
  
  return (
    <AuthContext.Provider value={{user,login}}>
      {props.children}

    </AuthContext.Provider>
  )
}

export default AuthProvider