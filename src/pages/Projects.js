import React, { useState } from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Projects.css";

function Projects() {
    const [selectedType, setSelectedType] = useState("all");
    const types = ["all", ...new Set(ProjectList.map((project) => project.type))];
    const filteredProjects =
        selectedType === "all"
            ? ProjectList
            : ProjectList.filter((project) => project.type === selectedType);

    return (
        <div className="projects">
            <div className="filter">
                {types.map((type) => (
                    <button
                        key={type}
                        className={selectedType === type ? "active" : ""}
                        onClick={() => setSelectedType(type)}
                    >
                        {type === "all" ? "All" : type}
                    </button>
                ))}
            </div>
            <div className="projectList">
                {filteredProjects.map((project) => {
                    return (
                        <ProjectItem
                            key={project.id}
                            id={project.id}
                            project={project}
                            slug={project.slug}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Projects;
