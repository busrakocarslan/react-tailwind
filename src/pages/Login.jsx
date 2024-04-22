import React, { useState } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Outlet, useNavigate } from "react-router-dom";

const Login = () => {
  const [email,setEmail]=useState("")
  const [pass,setPass]=useState("")

  const navigate =useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log({email,pass});
    if(email && pass){
      navigate("/home")
    }else{
      alert("please enter correctly")
    }
  }
  return (
    <div className="loginDiv">
      <div className="h-[450px] w-4/5 md:w-[500px] bg-violet-200 rounded-b-3xl border-t-orange-400 border-t-[1rem] p-5 flex flex-col items-center   text-center">
        <div className="mt-1">
          <h1 className="text-[22px] font-montepasifico sm:text-[32px] mb-3">
            LOG IN
          </h1>
          <h3 className=" text-[19px] ">
            Want a create websites?
            <span className="underline font-montepasifico text-orange-400 hover:cursor-pointer">
              Join 'FS-16 code fighters'
            </span>
          </h3>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="flex flex-col text-left gap-2">
              <label
                className=" font-montepasifico text-label hover:after:content-['usernumber'] hover:after:text-orange-400 hover:after:font-sans hover:after:text-[12px] hover:after:underline hover:after:ms-2 mb-[-.5rem]"
                htmlFor="name"
              >
                <FaUserGraduate className="inline me-2" />
                Username
              </label>
              <input type="text" id="name" required className="login-input"  onChange={(e)=>setEmail(e.target.value)} />
              <small className="text-right hover:cursor-pointer underline" onClick={()=>navigate("/username")} >
                Forget Your Username?
              </small>
            </div>
            <div className="flex flex-col text-left gap-2">
              <label
                className=" font-montepasifico text-label mb-[-.5rem]"
                htmlFor="password"
              >
                {" "}
                <RiLockPasswordFill className="inline me-2" />
                Password{" "}
              </label>
              <input type="password" id="password" required className="login-input" onChange={(e)=>setPass(e.target.value)} />
              <small className="text-right hover:cursor-pointer underline" onClick={()=>navigate("/password")} >
                Forget Your Password?
              </small>
            </div>
            <button className=" bg-slate-700 text-orange-400  font-montepasifico text-label hover:bg-inherit hover:border-2 hover:border-orange-400  hover:text-slate-700 duration-300  rounded-lg mt-2">LOG IN</button>
          </form>
        </div>
        <Outlet/>
      </div>
    </div>
  );
};

export default Login;
