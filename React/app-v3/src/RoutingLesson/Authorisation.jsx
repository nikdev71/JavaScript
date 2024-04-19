import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Authorisation() {
    return (
        <>
        <ul className='menu'>
                    <li><NavLink to="/auth/login">Login</NavLink></li>
                    <li><NavLink to="/auth/reg">Reg</NavLink></li>
                    </ul>
        <Outlet/>
        </>
    )
}

export default Authorisation
