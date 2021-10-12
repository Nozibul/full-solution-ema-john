import React from 'react';
import { NavLink } from 'react-router-dom';
import './login.css'

const Login = () => {
    return (
        <div className="login-form">
            <div>          
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="your email"/> <br />
                    <input type="password" name="" id="" placeholder="password" /> <br />
                    <input type="submit" value="submit" />
                </form>
                <p>New to ema-john ??? <NavLink to="/register">create account</NavLink> </p>
                <div>--------- Or --------</div>
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;