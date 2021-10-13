import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register :Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="your email"/> <br />
                    <input type="password" name="" id="" placeholder="password" /> <br />
                    <input type="password" name="" id="" placeholder="re-inter password" /> <br />
                    <input type="submit" value="submit" />
                </form>
                <p>Already have an Accouct? <NavLink to="/login">Login</NavLink> </p>
                <div>--------- Or --------</div>
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;