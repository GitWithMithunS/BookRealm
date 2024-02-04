import React from 'react'
import './navbar.styles.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  return (
    <section className="navbar-container">
        <div className="conotainer"></div>
        <div className="container flex justify-between align-center">
                <Link to="/" className="logo">Book<span className="text-primary">Realm</span></Link>
            </div>
    </section>
  )
}
