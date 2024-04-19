import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
         <header>
            <div className='container'>
                <nav>
                    <ul className='menu'>
                    <li><Link to="/">Hello</Link></li>
                    <li><Link to="/Mafia">Cards</Link></li>
                    <li><Link to="/Admin">Admin</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            <div className="container"></div>
        </footer>
        </>
       
    )
}

export default Layout
