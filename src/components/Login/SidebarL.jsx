// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
//import './Navbar.css'; // Create this CSS file for styling

const SidebarL = ({ handleLogout }) => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src="/path/to/logo.png" alt="Company Logo" className="logo" />
        <span className="brand-name">Atlas Speciality Clinic</span>
      </div>
      <div className="navbar-center">
        <NavLink to="/home" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/services" className="nav-link">Services</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </div>
      <div className="navbar-right">
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default SidebarL;
