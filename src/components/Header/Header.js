
// at first  Header component e logo set korbo
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import useAuth from '../Hooks/useAuth';
// import useFirebase from '../Hooks/firebase';
import './header.css'

const Header = () => {
    // const {user , logOut } = useFirebase()
    const {user , logOut } = useAuth()
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav className="nav">
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/order">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory here</NavLink>

                <span style={{color:"white"}}>{user.displayName} </span>
                { user.email ? <button onClick={logOut}>Logout</button>
                : <NavLink to="/login">Login</NavLink>}
            </nav>
        </div>
    );
};

export default Header;