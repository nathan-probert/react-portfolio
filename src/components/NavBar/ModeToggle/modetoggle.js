import React from "react";

import "./movetoggle.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const sun = <FontAwesomeIcon icon={faSun} className="btnImg" />;
const moon = <FontAwesomeIcon icon={faMoon} className="btnImg" />;

const ModeToggle = () => {
    // function for toggling light/dark mode
    const toggle = (e) => {
        const body = document.body;
        const switcher = document.getElementById("switcher");
        const isLight = body.classList.toggle("light");
        switcher.classList.toggle("light");
        localStorage.setItem("lightTheme", isLight);
    };

    // On component mount, check if 'dark' is in localStorage and apply the class
    React.useEffect(() => {
        const isLight = localStorage.getItem("lightTheme") == "true";
        if (isLight) {
            document.body.classList.add("light");
            document.getElementById("switcher").classList.add("light");
        }
    }, []);

    return (
        <div>
            <div className="toggle" id="switcher" onClick={toggle}>
                <div className="moon">
                    <h5 className="icon">{sun}</h5>
                </div>
                <div className="sun">
                    <h5 className="icon">{moon}</h5>
                </div>
            </div>
        </div>
    );
};

export default ModeToggle;
