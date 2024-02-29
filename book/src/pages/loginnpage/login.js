import React from 'react'
import authimg from '../../assets/authimg.png'
import Navbar from '../../components/layouts/navbar/Navbar'
import { AuthForm } from '../../components/form/authForm/AuthForm'

export const Login = () => {
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
                <h2>Login</h2>
                <p>Signin with email and password</p>
                <AuthForm btnName="login"/>
            </div>
            </div>
        </div>
    </section>
    </React.Fragment>
  )
}
