import React from 'react'
import './login.style.css'
import authimg from '../../assets/authimg.png'
import Navbar from '../../components/layouts/navbar/Navbar'

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
                <form action="" className=''>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="email" className='form-input' placeholder='Enter your email' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" className='form-input' placeholder='Enter your password' />
                    </div>
                    <div className="form-group">
                        <input type="submit" className='button-primary' value="Login" />
                    </div>
                </form>
            </div>
            </div>
        </div>
    </section>
    </React.Fragment>
  )
}
