import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
         <header>
            <div className='container'>
                <nav>
                    <ul className='menu'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/RoutingLesson">About</Link></li>
                    <li><Link to="/less6">Contact</Link></li>
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
