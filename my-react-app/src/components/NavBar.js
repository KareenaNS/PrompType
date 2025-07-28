import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const NavBar = ( { onHomeClick } ) => {
  return (
    <header className="navbar">
        <div className="navbar-section navbar-left">
          <Link to="/home">
            <img 
              src={`${process.env.PUBLIC_URL}/promptype_logo.png`}
              alt="Logo"
              className="home_button"
              style={{ cursor: 'pointer' }}
            />
          </Link>
        </div>
        <div className="navbar-section navbar-center"></div> 
        <nav className="navbar-section navbar-right">
            <Link to="/history">History</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/login">Login</Link>
        </nav>
    </header>
  );
};

export default NavBar;
