import React from "react";

import "./title.css";

const Title = () => {
    return (
        <title className="titles">
            <div className="main-title">
                <h2>
                    My <span>Projects</span>
                </h2>
            </div>
            <div className="sub-title">
                <h4>
                    I enjoy working on new projects with interesting
                    technologies such as
                    <span> artificial intelligence</span>,
                    <span> web scraping</span>, <span>web development</span>,
                    and <span> virtual reality</span>. Check out some of my
                    projects listed below!
                </h4>
            </div>
        </title>
    );
};

export default Title;
