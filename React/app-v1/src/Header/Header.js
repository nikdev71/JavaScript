import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

function Header() {
    return (
        <nav>
            <ul className="menu">
                <li><Link to="/Person">Person</Link></li>
                <li><Link to="/City">City</Link></li>
                <li><Link to="/Book">Book</Link></li>
            </ul>
        </nav>
    )
}

export default Header
