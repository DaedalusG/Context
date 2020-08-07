import React from 'react';
import App from '../App';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom'
import LoginPanel from './LoginPanel';

export const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <NavLink to="/" className="homeIcon">Context</NavLink>
            </div>
            <div className="navbar-sub">
                <LoginPanel />
            </div>
        </div>
    );
}