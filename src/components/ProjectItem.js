import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ProjectItem = ({ project, slug }) => {
  const navigate = useNavigate();

  if (!project || !slug) {
    return (
      <>
        <div><h1>not found</h1></div>
      </>
    )
  }

  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + slug);
      }}
    >
      <div style={{ backgroundImage: `url(${project.image})` }} className="bgImage" />
      <h1> {project.name} </h1>
      <p className="projectDescription"> {project.description} </p>
      <Link to={`/project/${project.slug}`} className='showMore' >View Details</Link>
    </div>
  );
}

export default ProjectItem;
