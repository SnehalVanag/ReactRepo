import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../assets/primeLogo.jpg';

const Header = () => {
  return (
   <>
    <nav className="navbar">
      <div className="nav-brand">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="nav-menu">
        <a href="/" className="nav-link">Home</a>
        <div className="dropdown">
          <a href="#" className="nav-link">Courses</a>
          <div className="dropdown-content">
            {/* Add dropdown items here */}
          </div>
        </div>
        <div className="dropdown">
          <a href="#" className="nav-link">Offer's</a>
          <div className="dropdown-content">
            {/* Add dropdown items here */}
          </div>
        </div>
        <Link to="/gallery" className="nav-link">Gallery</Link>
        {/* <a href="/gallery" className="nav-link">Gallery</a> */}
        <a href="/internship" className="nav-link">Internship</a>
        <div className="dropdown">
          <a href="#" className="nav-link">Business Activities</a>
          <div className="dropdown-content">
            {/* Add dropdown items here */}
          </div>
        </div>
        <div className="dropdown">
          <a href="#" className="nav-link">Franchise</a>
          <div className="dropdown-content">
            {/* Add dropdown items here */}
          </div>
        </div>
        <div className="dropdown">
          <a href="#" className="nav-link">More</a>
          <div className="dropdown-content">
            {/* Add dropdown items here */}
          </div>
        </div>
      </div>
      <div className="user-profile">
        <i className="fas fa-user"></i>
      </div>
    </nav>
   
   </>
    
  );
};

export default Header;