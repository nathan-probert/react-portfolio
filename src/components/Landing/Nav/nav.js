import React, { useState } from 'react';
import './nav.css';
import LightDark from './LightDark/lightdark';

const Nav = () => {
    return (        
        <nav className={`navbar`}>
            <div className="navbar-logo">
                <a href="/">MyPortfolio</a>
            </div>
            <ul className="navbar-links">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <LightDark height="65px" />
        </nav>
    );
};

export default Nav;