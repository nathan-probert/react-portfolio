import React from "react";

import "./leftintro.css";

const LeftIntro = () => {
    // variables for quotes
    const quotes = [
        "I am a <span>Computer Scientist</span> 💻.",
        "I am a <span>Software Developer</span> 🎨.",
        "I work with <span>Artificial Intelligence</span> 🤖.",
        "I work with <span>Data Analysis</span> 🔍.",
        "I work with <span>Web Design</span> 🌐.",
    ];
    var currentQuote = 1;

    const changeText = () => {
        // set to invisible
        document.getElementById("changingText").style.opacity = 0;

        setTimeout(function () {
            // run once invisible

            // change text
            document.getElementById("changingText").innerHTML =
                quotes[currentQuote];
            // update next text (restart if necessary)
            currentQuote++;
            if (currentQuote >= quotes.length) {
                currentQuote = 0;
            }
            // set visible
            document.getElementById("changingText").style.opacity = 1;
        }, 500);
    };

    // run every 5 seconds
    window.setInterval(function () {
        changeText();
    }, 5000);

    return (
        <div className="leftContainer">
            <div className="left-header">
                <div className="left-con">
                    <p className="possible true" id="changingText">
                        I am a <span>Computer Scientist</span> 💻.
                    </p>
                    <p className="aboutMe">
                        I'm studying for a Bachelor's in <span> Computer Science Honours</span>
                        with a minor in Business Economics at the University of Guelph.
                        I enjoy working with artificial intelligence 🤖,
                        data analytics 🔍, and web design 🌐, in particular using these
                        technologies to create cool new projects.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LeftIntro;
