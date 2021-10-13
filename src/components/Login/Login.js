import React from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
// import useFirebase from '../Hooks/firebase';
import useAuth from '../Hooks/useAuth';
import './login.css'

const Login = () => {
    const {signInGoogle} = useAuth();

    const location = useLocation() // akhan theke abr onno jaigai pathate useLocation use korlam
    const redirect_uri = location.state?.from || '/shop' ;
    const history = useHistory() 

    const handleGoogleLogIn = ()=>{
        signInGoogle()
        .then(result =>{
          history.push(redirect_uri)
        })
    }

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
                <button onClick={handleGoogleLogIn} className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;