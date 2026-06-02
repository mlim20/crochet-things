import React, { useState} from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom'
import { IoMenuSharp as MenuIcon } from "react-icons/io5";
import { IoMdClose as CloseMenu } from "react-icons/io";
import './Navbar.css'
import About from '../pages/About'

const Navbar = () => {
    // Responsive navbar:
    // Adapted from https://sdever.medium.com/building-a-responsive-navigation-bar-with-react-css-d9b30af03c20
    // and https://medium.com/@badalchandrahalder99/how-to-create-a-responsive-navbar-in-react-2bbc51081571
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleIsMenuOpen = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className={isMenuOpen ? "navbar menu-active" : "navbar"}>
            <div className="menu" onClick={handleIsMenuOpen}>
                {
                    isMenuOpen ? (
                        <CloseMenu className="menu-icon close" />
                    ) : (
                        <MenuIcon className="menu-icon icon"/>
                    )
                }
            </div>
            <ul className={isMenuOpen ? "navlist menu-active" : "navlist"}>
                <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
                <li><NavLink to="about" onClick={closeMenu}>About</NavLink></li>
                <li><NavLink to="materials" onClick={closeMenu}>Materials</NavLink></li>
                <li><NavLink to="gallery" onClick={closeMenu}>Gallery</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;