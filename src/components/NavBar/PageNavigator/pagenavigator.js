import { React, useEffect } from "react";

import "./pagenavigator.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faComputer,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const home = <FontAwesomeIcon icon={faHome} className="btnImg" />;
const computer = <FontAwesomeIcon icon={faComputer} className="btnImg" />;
const envelope = <FontAwesomeIcon icon={faEnvelope} className="btnImg" />;

const getUrl = () => {
    const url = window.location.pathname;
    console.log(url);
    if (url === "/home") {
        document.getElementById("home").classList.add("active-btn");
    } else if (url === "/projects") {
        document.getElementById("projects").classList.add("active-btn");
    } else if (url === "/contact") {
        document.getElementById("contact").classList.add("active-btn");
    }
};

const PageNavigator = () => {
    // get url

    useEffect(() => {
        getUrl();
    }, []);

    return (
        <div className="pageNavigator">
            <a className="option home" id="home" href="/home">
                <h5 className="icon">{home}</h5>
            </a>
            <a className="option projects" id="projects" href="/projects">
                <h5 className="icon">{computer}</h5>
            </a>
            <a className="option contact" id="contact" href="/contact">
                <h5 className="icon">{envelope}</h5>
            </a>
        </div>
    );
};

export default PageNavigator;
