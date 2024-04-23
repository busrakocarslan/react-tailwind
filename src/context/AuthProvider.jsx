import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'



export const AuthContext=createContext()// componetin içinden eksport edemeyeceğimizden dışında tanımlamalıyız. 

const AuthProvider = (props) => {
  const [user,setUser]= useState(JSON.parse(sessionStorage.getItem("user")) || null)
  const navigate=useNavigate()
  const login=(info)=>{// burada info ile gönderdiklerimiz login sayfasında email,pass olarak kullanıyoruz
    setUser(info)
    navigate("/dashboard")
    
  }
  const logout = () =>setUser(null)
  console.log(logout);
  useEffect(()=>{
    sessionStorage.setItem("user",JSON.stringify(user))
  },[user])
  
  return (
    <AuthContext.Provider value={{user,login,logout}}>
      {props.children}

    </AuthContext.Provider>
  )
}

export default AuthProvider