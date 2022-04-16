import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-info">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="food">
                    <Link to="/">About Online Food</Link>
                    <Link to="/">Read Our Blog</Link>
                    <Link to="/">Sign Up To Deliver</Link>
                    <Link to="/">About Online Food</Link>
                </div>

                <div className="help">
                    <Link to="/">Get Help</Link>
                    <Link to="/">Read FAQs</Link>
                    <Link to="/">View all cities</Link>
                    <Link to="/">Restaurants near me</Link>
                </div>
            </div>


            <div className="footer-link">
                <div className="copyright">
                    <p>Copyright &copy; 2022 Online Food</p>
                </div>
                <div className="policy">
                    <Link to="/">Privacy Policy</Link>
                    <Link to="/">Terms of Use</Link>
                    <Link to="/">Pricing</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;