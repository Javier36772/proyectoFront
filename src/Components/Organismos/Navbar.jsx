import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">GameUnlocker</Link>
        <input type="text" placeholder="Search..." className="search-bar" />
        <ul className="nav-list">
          <li><Link to="/UserPorfile"><i className="fas fa-user"></i></Link></li>
          <li><Link to="/servicios"><i className="fas fa-heart"></i></Link></li>
          <li><Link to="/contacto"><i className="fas fa-shopping-cart"></i></Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;