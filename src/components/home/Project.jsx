import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import "./Project.css";

const Project = () => {
  const { name } = useParams();
  const { state } = useLocation();
  const { project } = state;

  return (
    <>
      <Navbar />
      <div className="project">
        <img src={project.img} alt={project.name} />

        <h1 className="project-name">{project.name}</h1>
        {project.website && (
          <a href={project.website} className='project-link' target="_blank" rel="noopener noreferrer">
            View Website
          </a>
        )}
        <p className="project-desc">{project.desc}</p>
      </div>
    </>
  );
};

export default Project;
