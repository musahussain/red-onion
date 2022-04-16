import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Header.css';

const Header = () => {
    const [showMobileNav, setShowMobileNav] = useState(false);

    const openMobileNav = () => {
        setShowMobileNav(!showMobileNav);
    }

    return (
        <div>
            <div className="header">
                <div className="site-logo">
                    <Link to="/home"><img src={logo} alt="logo" /></Link>
                </div>
                <nav className={`nav ${showMobileNav && 'mobile-nav'}`}>
                    <Link to="/cart"><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                </nav>

                <div onClick={openMobileNav} className="mobile-menu">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Header;