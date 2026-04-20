import React from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom'
import './Navbar.css'
import About from '../pages/About'

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navlist">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="about">About</NavLink></li>
                <li><NavLink to="materials">Materials</NavLink></li>
                <li><NavLink to="gallery">Gallery</NavLink></li>
            </ul>
        </nav>
        // <nav className="navbar">
        //     <ul className="navlist">
        //         <li><a href="/">Home</a></li>
        //         <li><a href="/about">About</a></li>
        //         <li><a href="/materials">Materials</a></li>
        //         <li><a href="/gallery">Gallery</a></li>
        //     </ul>
        // </nav>
    )
}

export default Navbar;