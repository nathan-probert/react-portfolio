import React from "react";

import "./projects.css";

import Title from "./Title/title";
import ActualProjects from "./ActualProjects/actualprojects";

import { motion as m } from 'framer-motion';

const Projects = () => {
    return (
        <m.div  initial={{ transform: 'translateY(-100%)' }} animate={{ transform: 'translateY(0%)' }} transition={{ duration: .5, ease: "easeOut" }} className="projectScreen">
            <Title />
            <ActualProjects />
        </m.div>
    );
};

export default Projects;
