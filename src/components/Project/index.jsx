import React from "react";
import { Tooltip } from "react-tooltip";
import "./style.css";

const Project = ({
  title,
  img,
  text,
  tags,
  gitHubLink,
  demoLink,
  disabled,
  linkText,
}) => {
  return (
    <div className="project-card reveal">
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
            <img src="/portfolio/github.svg" width={35} height={35} alt="github repo" />
          </a>
          {!disabled ? (
            <a target="_blank" rel="noopener noreferrer" href={demoLink}>
              Демо
              <img src="/portfolio/demo.svg" width={30} height={30} alt="demo" />
            </a>
          ) : (
            <>
              <a className="buttons__link-disabled" onClick={(e) => e.preventDefault()}>
                Демо
                <img src="/portfolio/demo.svg" width={30} height={30} alt="demo" />
              </a>
              <Tooltip
                anchorSelect=".buttons__link-disabled"
                place="top"
                content={linkText}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
