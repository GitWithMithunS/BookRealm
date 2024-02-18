import React from 'react';   
import './navbar.styles.css';
import { Link } from 'react-router-dom';

export default function Navbar({darkTheme,darkTextTheme}) {
  console.log(darkTheme)
  return (
    <section className={darkTheme ? 'background-dark navbar-container relative' : 'background-transparent navbar-container'}>
        <div className="conotainer"></div>
        <div className="container flex justify-between align-center">
                <Link to="/" className="logo">Book<span className="text-primary">Realm</span></Link>
        
        <nav className="nav-link-container">
          <Link to="/" className={`${darkTextTheme ? "nav-links-dark":"nav-links"} `}>Home</Link>
          <Link to="/books" className={`${darkTextTheme ? "nav-links-dark":"nav-links"} `}>Books</Link>
          <Link to="/login" className={`${darkTextTheme ? "nav-links-dark":"nav-links"} `}>Login</Link>
          <Link to="/signup" className={`${darkTextTheme? "nav-links-dark":"nav-links"} `}>Sign up</Link>
        </nav>
        </div>
    </section>
  )
}
