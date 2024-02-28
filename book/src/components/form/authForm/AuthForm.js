import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import fire from '../../../firebase/Firebase.';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


export const AuthForm = ({ btnName }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handelsubmit = (event) => {
        event.preventDefault();
        console.log(email)
        console.log(password)
        console.log(username)
        const auth = getAuth(fire);
        // console.log(auth)
        if (btnName === 'login') {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredentials) => {
                    navigate('/')
                })
                .catch((err) => console.log(err));
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredentials) => {
                    // console.log(userCredentials)
                    userCredentials.user.displayName = username;
                    navigate('/');
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }
    return (
        <>
            <form action="" className='' onSubmit={handelsubmit}>
                {btnName==="Sign Up"  &&
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input 
                        type="text" 
                        className='form-input' 
                        placeholder='Enter your name' 
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        required
                    />
                </div>
                }
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input 
                        type="email"
                        className='form-input'
                        placeholder='Enter your email'
                        autoComplete='off'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input 
                        type="password"
                        className='form-input'
                        placeholder='Enter your password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input type="submit" className='button-primary' value={btnName} />
                </div>
            </form>
        </>
    )
}
