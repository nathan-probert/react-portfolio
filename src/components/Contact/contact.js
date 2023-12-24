import React from "react";

import "./contact.css";

import Title from "./Title/title";
import BothContact from "./BothContact/bothcontact";

const Contact = () => {
    return (
        <div className="contactScreen">
            <Title />
            <BothContact />
        </div>
    );
};

export default Contact;
