import React from "react";

import "./landing.css";

import Navbar from "./Nav/nav";

import { motion as m } from "framer-motion";

const Landing = () => {
    return (
        <m.div className="overallContainer">
            {/* header - navbar */}
            <Navbar />
            {/* intro - home + about */}
            {/* work -> report */}
            {/* projects -> showcase few, see more button */}
            {/* contact */}
        </m.div>
    );
};

export default Landing;
