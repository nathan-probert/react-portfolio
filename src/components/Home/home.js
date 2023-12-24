import React from "react";

import "./home.css";

import IntroHeader from "./IntroHeader/introheader";
import BothIntros from "./BothIntros/bothintros";
import ResumeBtn from "./ResumeBtn/resumebtn";

const Home = () => {
    return (
        <div className="overallContainer">
            <IntroHeader />
            <BothIntros />
            <ResumeBtn />
        </div>
    );
};

export default Home;
