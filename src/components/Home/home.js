import React from "react";

import "./home.css";

import IntroHeader from "./IntroHeader/introheader";
import BothIntros from "./BothIntros/bothintros";
import ResumeBtn from "./ResumeBtn/resumebtn";

import { motion as m } from "framer-motion";

const Home = () => {
    return (
        <m.div  initial={{ transform: 'translateY(-100%)' }} animate={{ transform: 'translateY(0%)' }} transition={{ duration: .5, ease: "easeOut" }} className="overallContainer">
            <IntroHeader />
            <BothIntros />
            <ResumeBtn />
        </m.div>
    );
};

export default Home;
