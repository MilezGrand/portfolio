import React from 'react';
import './style.css';
import Project from '../Project/Project';
import { projects } from '../../helpers/projectsList';

const Projects = ({ projectsRef }) => {
  return (
    <section className="projects" ref={projectsRef}>
      <div className="container" id="container__projects">
        <div className="content" id="content__projects">
          <h4>ПРОЕКТЫ</h4>
          <h3>Каждый проект - это уникальная работа 🧩</h3>
          <div className="project-list">
            {projects.map((project, index) => {
              return (
                <Project
                  key={index}
                  title={project.title}
                  img={project.img}
                  text={project.text}
                  tags={project.tags}
                  gitHubLink={project.gitHubLink}
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
