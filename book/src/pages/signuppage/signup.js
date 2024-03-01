import React from 'react'
import './signup.style.css'
import authimg from '../../assets/authimg.png'
import Navbar from '../../components/layouts/navbar/Navbar'
import { AuthForm } from '../../components/form/authForm/AuthForm'

export const Signup = () => {
    return (
        <React.Fragment>
        <Navbar darkTextTheme={ true }/>
        <section className='signup-container'>
            <div className='signup-imgcontainer'>
                <img src={authimg} alt="authentication-background" />
            </div>
            <div className="signup-content-container">
                <div className="container">
                <div className="content-wrapper">
                    <h2>Signup</h2>
                    <p>Create a new account with email and password</p>
                    <AuthForm btnName="Sign Up"/>
                </div>
                </div>
            </div>
        </section>
        </React.Fragment>
    )
}
