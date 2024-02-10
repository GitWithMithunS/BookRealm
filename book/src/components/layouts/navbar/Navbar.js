import React from 'react';   
import './navbar.styles.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({darkTheme}) {
  console.log(darkTheme)
  return (
    <section className={darkTheme ? 'background-dark navbar-container relative' : 'background-transparent navbar-container'}>
        <div className="conotainer"></div>
        <div className="container flex justify-between align-center">
                <Link to="/" className="logo">Book<span className="text-primary">Realm</span></Link>
        
        <nav className="nav-link-container">
          <Link to="/" className='nav-links'>Home</Link>
          <Link to="/books" className='nav-links'>Books</Link>
        </nav>
        </div>
    </section>
  )
}
