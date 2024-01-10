import { React, useEffect } from "react";

import "./navbar.css";

import PageNavigator from "./PageNavigator/pagenavigator";
import ModeToggle from "./ModeToggle/modetoggle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faComputer,
    faEnvelope,
    faBars,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";

const home = <FontAwesomeIcon icon={faHome} className="btnImg" />;
const computer = <FontAwesomeIcon icon={faComputer} className="btnImg" />;
const envelope = <FontAwesomeIcon icon={faEnvelope} className="btnImg" />;
const bars = <FontAwesomeIcon icon={faBars} className="btnImg" />;
const xmark = <FontAwesomeIcon icon={faXmark} className="btnImg" />;

const getUrl = () => {
    const url = window.location.pathname;
    if (url === "/home") {
        document.getElementById("home burger").classList.add("active-btn-burg");
    } else if (url === "/projects") {
        document.getElementById("projects burger").classList.add("active-btn-burg");
    } else if (url === "/contact") {
        document.getElementById("contact burger").classList.add("active-btn-burg");
    }
};

const Navbar = () => {

    useEffect(() => {
        getUrl();
    }, []);

    const open = (e) => {
        const burger = document.getElementsByClassName("bun");
        burger[0].style.display = 'none';
        const x = document.getElementsByClassName("close");
        x[0].style.display = 'block';

        const items = Array.from(document.getElementsByClassName('topping'));
        items.forEach(item => {
            item.style.display = 'grid';
        });

        const body = document.body;

        const url = window.location.pathname;
        if (url === "/home") {
            const con = body.getElementsByClassName('overallContainer');
            con[0].style.paddingTop = '10rem';
        } else if (url === "/projects") {
            const con = body.getElementsByClassName('main-title');
            con[0].style.paddingTop = '6rem';
        } else if (url === "/contact") {
            const con = body.getElementsByClassName('main-title');
            con[0].style.paddingTop = '6rem';
        }
    };

    const close = (e) => {
        const burger = document.getElementsByClassName("bun");
        burger[0].style.display = 'block';
        const x = document.getElementsByClassName("close");
        x[0].style.display = 'none';

        const items = Array.from(document.getElementsByClassName('topping'));
        items.forEach(item => {
            item.style.display = 'none';
        });
        
        const body = document.body;

        const url = window.location.pathname;
        if (url === "/home") {
            const con = body.getElementsByClassName('overallContainer');
            con[0].style.paddingTop = '4rem';
        } else if (url === "/projects") {
            const con = body.getElementsByClassName('main-title');
            con[0].style.paddingTop = '0';
        } else if (url === "/contact") {
            const con = body.getElementsByClassName('main-title');
            con[0].style.paddingTop = '0';
        }
    };

    return (
        <nav className="navbar">
            <PageNavigator className="menuOptions" />
            <ModeToggle className="toggleLightDark" />
            <div className="hamburger">
                <div className="bun" onClick={open}>
                    {bars}
                </div>
                <div className="close" onClick={close}>
                    {xmark}
                </div>
                <a className="topping home" id="home burger" href="/home">
                    <h5 className="icon">{home}</h5>
                    <div className="text">Home</div>
                </a>
                <a className="topping projects" id="projects burger" href="/projects">
                    <h5 className="icon">{computer}</h5>
                    <div className="text">Projects</div>
                </a>
                <a className="topping contact" id="contact burger" href="/contact">
                    <h5 className="icon">{envelope}</h5>
                    <div className="text">Contact Me</div>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
