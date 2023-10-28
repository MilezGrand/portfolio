import React from "react";
import "./style.css";

const Project = ({
  title,
  img,
  text,
  tags,
  gitHubLink,
  demoLink,
  disabled,
}) => {
  return (
    <div className="project-card">
      <img src={img} alt="project" height={310} id="project-card__image" />
      <div className="content" id="content__project">
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
        <div className="buttons">
          <a target="_blank" rel="noopener noreferrer" href={gitHubLink}>
            Исходный код
            <img src="github.svg" width={35} height={35} alt="github repo" />
          </a>
          {!disabled ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={demoLink}
            >
              Демо
              <img src="demo.svg" width={30} height={30} alt="demo" />
            </a>
          ) : (
            <a className="link-disabled" onClick={(e) => e.preventDefault()}>
              Демо
              <img src="demo.svg" width={30} height={30} alt="demo" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
