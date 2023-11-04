import React from "react";
import "./style.css";
import Project from "../Project";
import { projects } from "../../helpers/projectsList";

const Projects = ({ projectsRef }) => {
  return (
    <section className="projects" ref={projectsRef}>
      <div className="wrapper projects__container">
        <div className="projects__content">
          <h4>ПРОЕКТЫ</h4>
          <h3>Каждый проект - это уникальная работа 🧩</h3>
          <div className="projects__content_project-list">
            {projects.map((project, index) => {
              return (
                <Project
                  key={index}
                  title={project.title}
                  img={project.img}
                  text={project.text}
                  tags={project.tags}
                  gitHubLink={project.gitHubLink}
                  demoLink={project.demoLink}
                  disabled={project.disabled}
                  linkText={project.linkText}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
