import './Navbar.css'
import logo from '../img/Aviao.png'
import React from 'react'

import { Link } from 'react-router-dom'

export default _ =>
    <nav className='Navbar'>
        <div className='logo'>
            <a href="#"><img src={logo} alt="ITA Júnior" /></a>
            <h1><a href="#"><span className="yellow">ITA</span> Júnior</a></h1>
        </div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
    </nav>