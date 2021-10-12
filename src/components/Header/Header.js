
// at first  Header component e logo set korbo
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav className="nav">
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/order">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory here</NavLink>
            </nav>
        </div>
    );
};

export default Header;