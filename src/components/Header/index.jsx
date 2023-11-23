import React from "react";
import { Tooltip } from "react-tooltip";
import "./style.css";

export const Header = ({ headerRef }) => {
  return (
    <section className="header" ref={headerRef}>
      <div className="wrapper header__container">
        <div className="header__content">
          <div className="header__content__info">
            <div>
              <h1>Web developer</h1>
              <p>
                Привет, я Влад. Программист-разработчик из Екатеринбурга, Россия
                📍
              </p>
              <span>
                <a href="https://github.com/MilezGrand">
                  <img src="/portfolio/github.svg" alt="GitHub" width={40} height={40} />
                </a>
              </span>
            </div>
            <img
              src="/portfolio/photo.jpg"
              width={350}
              height={350}
              alt="me"
              id="avatar"
            />
          </div>
          <div className="header__content__skills">
            <p>Навыки</p>
            <ul>
              <li id="NodeJS">
                <img src="/portfolio/nodejs.svg" alt="" width={35} height={35} />
                <Tooltip anchorSelect="#NodeJS" place="top" content="NodeJS" />
              </li>
              <li id="JavaScript">
                <img src="/portfolio/js.svg" alt="" width={35} height={35} />
                <Tooltip anchorSelect="#JavaScript" place="top" content="JavaScript" />
              </li>
              <li id="TypeScript">
                <img src="/portfolio/ts.svg" alt="" width={35} height={35} />
                <Tooltip anchorSelect="#TypeScript" place="top" content="TypeScript" />
              </li>
              <li id="Next"> 
                <img src="/portfolio/next.svg" alt="" width={35} height={35} />
                <Tooltip anchorSelect="#Next" place="top" content="Next" />
              </li>
              <li id="ReactJS"> 
                <img src="/portfolio/react.svg" alt="" width={35} height={35} />
                <Tooltip anchorSelect="#ReactJS" place="top" content="React" />
              </li>
              <li id="Redux-Toolkit">
                <img src="/portfolio/redux.png" alt="" width={30} height={30} />
                <Tooltip anchorSelect="#Redux-Toolkit" place="top" content="Redux Toolkit" />
              </li>
              <li id="SCSS">
                <img src="/portfolio/scss.svg" alt="" width={35} height={35} />
                <Tooltip anchorSelect="#SCSS" place="top" content="SCSS" />
              </li>
              <li id="Tailwind"> 
                <img src="/portfolio/tailwindcss.svg" alt="" width={35} height={35} />
                <Tooltip anchorSelect="#Tailwind" place="top" content="Tailwind" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
