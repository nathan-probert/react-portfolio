import React from "react";

import "./projects.css";

import Title from "./Title/title";
import ActualProjects from "./ActualProjects/actualprojects";

const Projects = () => {
    return (
        <div className="projectScreen">
            <Title />
            <ActualProjects />
        </div>
    );
};

export default Projects;
