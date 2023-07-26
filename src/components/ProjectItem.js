import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function ProjectItem({ project, slug }) {
  const navigate = useNavigate();

  // Ensure the project object is valid
  if (!project || !slug || !project.id || !project.name || !project.image || !project.description) {
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

ProjectItem.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
export default ProjectItem;
