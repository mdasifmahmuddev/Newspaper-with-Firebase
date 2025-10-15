import React from 'react'

import { NavLink } from "react-router";

const Header = () => {
    return (

        <>

            <div className="navbar flex justify-center gap-4 text-white font-bold text-xl    bg-gray-500 shadow-sm ">



                <div className='hover:underline'> <NavLink to='/'> Home  </NavLink>   </div>
                <div className='hover:underline'><NavLink to='/login'>Login </NavLink></div>



            </div>



        </>
    )
}

export default Header