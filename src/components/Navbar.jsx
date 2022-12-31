import React from 'react'
import "./Navbar.css"
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to={"/"}>
            <img className='logo' src={logo} alt="Logo" />
        </Link>
        <div className='navbar-links'>
            <p>Home</p>
            <p>Portfolio</p>
            <p>Contact</p>
            <p>Blog</p>
        </div>
    </div>
  )
}

export default Navbar