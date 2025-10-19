import React from 'react'
import {Link} from "react-router-dom";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <div>
        <nav className="navbar bg-dark border-bottom border-body">
     <h1>Github Users</h1>
      <ul>
        <li><Link to="/">Home</Link></li> 
        <li><Link to="/contact">Contact</Link></li> 
        <li><Link to="/aboutUs">About Us</Link></li>
      </ul>
      </nav>
    </div>
  )
}

export default Navbar
