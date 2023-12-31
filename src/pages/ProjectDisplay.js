import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";

const ProjectDisplay = () => {

    const {slug} = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const projectDetails = ProjectList.find((item) => item.slug === slug);
        if (projectDetails) {
            setProject(projectDetails);
        }
    }, [slug]);

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <div className="project">
            <h1>{project.name}</h1>
            <img src={project.image} alt={project.name}/>
            <p>
                <b>Skills:</b> {project.skills}
            </p>
            <p>{project.description}</p>
        </div>
    );
}

export default ProjectDisplay;
