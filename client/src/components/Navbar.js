import React from 'react';
import { NavLink } from 'react-router-dom'
import LoginPanel from './LoginPanel';

const Navbar = ({ needLogin }) => {
    return (
        <div className="navbar">
            <div>
                <NavLink to="/" className="homeIcon">Context</NavLink>
            </div>
            <div className="navbar-sub">
                <LoginPanel needLogin={needLogin} />
            </div>
        </div>
    );
}

export default Navbar