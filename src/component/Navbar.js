import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper green accent-3">
        <div className="container">
            <a className="brand-logo left">PokeNews</a>
            <ul className="right">
                <li><NavLink to="/">Home</NavLink></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
        </nav>
    );
}
export default Navbar;