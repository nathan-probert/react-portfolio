import React from "react";

import "./contact.css";

import Title from "./Title/title";
import BothContact from "./BothContact/bothcontact";

import { motion as m } from 'framer-motion';

const Contact = () => {
    return (
        <m.div  initial={{ transform: 'translateY(-100%)' }} animate={{ transform: 'translateY(0%)' }} transition={{ duration: .4, ease: "easeOut" }} className="contactScreen">
            <Title />
            <BothContact />
        </m.div>
    );
};

export default Contact;
