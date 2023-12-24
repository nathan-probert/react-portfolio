import React from "react";

import "./bothcontact.css";

import LeftContact from "../LeftContact/leftcontact";
import RightContact from "../RightContact/rightcontact";

const BothContact = () => {
    return (
        <div className="bothContactCon">
            <LeftContact />
            <RightContact />
        </div>
    );
};

export default BothContact;
