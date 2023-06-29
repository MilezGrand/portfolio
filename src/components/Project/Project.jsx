import React from 'react';
import './style.css';

const Project = ({ title, img, text, tags, gitHubLink}) => {
  return (
    <div className="project-card">
      <img src={img} alt="project" height={310} id='project-card__image'/>
      <div className="content" id='content__project'>
        <h3>{title}</h3>
        <p>{text}</p>
        <div className="tags">
          {tags.map((tag, index) => {
            return (
              <span className="badge" key={index}>
                {tag}
              </span>
            );
          })}
        </div>
        <a href={gitHubLink}>Исходный код <img src='github.svg' width={35} height={35} alt='guthub repo'/></a>
      </div>
    </div>
  );
};

export default Project;
