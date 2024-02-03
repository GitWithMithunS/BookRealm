import React from 'react'
import './navbar.styles.css';

export default function Navbar() {
  return (
    <section className="navbar-container">
        <div className="conotainer"></div>

        <div className="container flex justify-between align-center">
                <Link to="/" className="logo">Book<span className="text-primary">worm</span></Link>

                {user ? showLogoutAndCart : showLoginandSignUp }
            </div>
    </section>
  )
}
