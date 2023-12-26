import React from "react";

import "./rightcontact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelopeOpenText,
    faPhone,
    faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const linkedin = (
    <FontAwesomeIcon icon={icon({ name: "linkedIn", style: "brands" })} className="btnImg"/>
);
const envelope = (
    <FontAwesomeIcon icon={faEnvelopeOpenText} className="btnImg" />
);
const phone = <FontAwesomeIcon icon={faPhone} className="btnImg" />;
const download = <FontAwesomeIcon icon={faDownload} className="btnImg" />;

const RightContact = () => {
    return (
        <div className="rightContainer">
            <div className="right-side">
                <div className="right-con">
                    <div className="text-con">
                        <h1>
                            <span>Contact</span> Me
                        </h1>
                        <p>
                            Please contact me with one of the following methods
                            mentioned below, and I will get back to you as soon
                            as possible.
                        </p>
                    </div>
                    <div className="contact-options">
                        <div className="placeholder"></div>

                        <a
                            href={"mailto:nathanprobert@rogers.com"}
                            target="_blank"
                        >
                            <div className="contactOptionI">
                                <div className="text">Email</div>
                                {envelope}
                            </div>
                        </a>

                        <a href="#">
                            <div className="contactOptionI">
                                <div className="text">647-871-1731</div>
                                {phone}
                            </div>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/nathan-probert-197463275/"
                            target="_blank"
                        >
                            <div className="contactOptionI">
                                <div className="text">LinkedIn</div>
                                {linkedin}
                            </div>
                        </a>
                    </div>
                    <div className="resume-btn">
                        <div className="resbtn-con">
                            <a
                                href="https://drive.google.com/file/d/1iDyzd99vEPIuDAbks-rweN20qIfFZG3_/view?usp=sharing"
                                target="_blank"
                                className="main-btn"
                            >
                                <span className="btn-text">Download Resume</span>
                                <span className="btn-icon">
                                    {download}
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightContact;
