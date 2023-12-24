import React from "react";

import "./bothintros.css";

import LeftIntro from "./LeftIntro/leftintro";
import RightIntro from "./RightIntro/rightintro";

const BothIntros = () => {
    return (
        <div className="bothContainer">
            <LeftIntro />
            <RightIntro />
        </div>
    );
};

export default BothIntros;
