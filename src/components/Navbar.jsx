import React, { useContext, useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
import { FcHome } from "react-icons/fc"; 
import { FaSignOutAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { AuthContext } from '../context/AuthProvider';

const navigation=[
    {
        title:"Home",
        path:"/"
    },
    {
        title:"About",
        path:"/about"
    },
    {
        title:"Products",
        path:"/products"
    },
    {
        title:"Contact",
        path:"/contact"
    }
]

const Navbar = () => {
    const[show,setShow]=useState(false)
    const {logout}=useContext(AuthContext)
  return (
    <nav className='h-auto py-2 bg-gray-300' >
        <div>
        
            <div className='md:hidden flex justify-between p-5'>
            <Link to="https://clarusway.com" target='true'><FcHome /></Link>
                <button onClick={()=>setShow(!show)} className='menu-btn text-gray-900 hover:text-gray-500 text-label duration-150' > {show ? <MdClose /> :
                    <GiHamburgerMenu />}

                </button>

            </div>
            <div className= {` ${show? "flex flex-col items-center justify-center": "hidden"} md:flex md:justify-start md:items-center gap-10 ml-10 text-label font-bold` }>
               
                <div className='max-md:text-center md:items-center md:text-end
                 '>
                    <ul className='md:flex gap-5 justify-start w-[90vw]  m-5'>
                        {
                            navigation.map(item=>(
                                <li key={item.title} className='hover:font-montepasifico hover:text-orange-400 ps-1 hover:cursor-pointer pe-1 transition-all duration-300 '>
                                    <NavLink to={item.path} element={item.title} />{item.title}
                                </li>
                            ))
                            
                        }
                    </ul>
                <NavLink to="/" className='bg-slate-900 text-orange-400 rounded-xl font-montepasifico' onClick={()=>logout()}>LogOut<FaSignOutAlt className='inline-block ms-3'/></NavLink>

                </div>
                

            </div>
        </div>
    </nav>
  )
}

export default Navbar