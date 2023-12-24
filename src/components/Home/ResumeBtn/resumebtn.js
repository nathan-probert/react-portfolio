import React from "react";

import "./resumebtn.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const download = <FontAwesomeIcon icon={faDownload} className="btnImg" />;

const ResumeBtn = () => {
    return (
        <div>
            <div className="resume-btn">
                <div className="btn-con">
                    <a
                        href="https://drive.google.com/file/d/1iDyzd99vEPIuDAbks-rweN20qIfFZG3_/view?usp=sharing"
                        target="_blank"
                        className="main-btn"
                    >
                        <span className="btn-text">Download Resume</span>
                        <span className="btn-icon">{download}</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ResumeBtn;
