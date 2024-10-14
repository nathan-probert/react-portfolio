import React from 'react';
import './lightdark.css';

const LightDark = ({ height }) => {
    const toggle = () => {
        const body = document.body;

        if (body.classList.contains("dark")) {
            body.classList.remove("dark");
            body.classList.add("light");
        } else {
            body.classList.remove("light");
            body.classList.add("dark");
        }
    };

    return (
        <label htmlFor="switch" className="switch" style={{ height }}>
            <input type="checkbox" id="switch" onClick={toggle} />
            <div className="sunmoon" />
        </label>
    );
};

export default LightDark;
