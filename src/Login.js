import React from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';
import { useEffect, useState } from "react";

function Login() {

const history = useHistory();    
const [email, setEmail] = useState('');

const [password, setPassword] = useState('');

const signIn = e => {
    e.preventDefault();

    auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))

}

const register = e => {
    e.preventDefault();

    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            if(auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
}

    return (
        <div className='login'>
            <Link to='/'>
            <img 
            className="login_logo"
            src='http://pngimg.com/uploads/shopping_cart/shopping_cart_PNG62.png' 
            alt=""
            />
            </Link>

            <div className='login_container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text' value={email}
                    onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password}
                    onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn}
                    className='login_signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to our conditions of Use & Sale.
                    Please see our Privacy Notice, our Cookies Notice and our
                    Interest-Based Ads
                    Notice.
                </p>

                <button onClick={register}
                className='login_registerButton'>Create an Account</button>
            </div>
        </div>
    )
}

export default Login
