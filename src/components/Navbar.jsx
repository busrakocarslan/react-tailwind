import React from 'react'
import { Link,NavLink } from 'react-router-dom'
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
  return (
    <nav >
        <div>
            <div className='flex items-center justify-between'>
                <Link to="https://clarusway.com"/>
                <div className='md:flex md:flex-row'>
                    <ul>
                        {
                            navigation.map(item=>(
                                <li key={item.title}>
                                    <NavLink to={item.path} element={item.title}/>{item.title}
                                </li>
                            ))
                            //hamburger menü de kalındı son 15 dk bak
                        }
                    </ul>
                </div>
                

            </div>
        </div>
    </nav>
  )
}

export default Navbar