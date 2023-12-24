import React from "react";

import "./navbar.css";

import PageNavigator from "./PageNavigator/pagenavigator";
import ModeToggle from "./ModeToggle/modetoggle";

const Navbar = () => {
    return (
        <nav className="navbar">
            <PageNavigator className="menuOptions" />
            <ModeToggle className="toggleLightDark" />
        </nav>
    );
};

export default Navbar;
