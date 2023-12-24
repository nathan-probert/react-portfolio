import React from "react";

import "./introheader.css";

const IntroHeader = () => {
    return (
        <div className="headerContainer">
            <h1 className="initial-text">
                Hi, I'm <span className="colour">Nathan Probert</span> 👋.
            </h1>
        </div>
    );
};

export default IntroHeader;
