import React from 'react';
import './style.css';

export const Header = ({ headerRef }) => {
  return (
    <section className="header" ref={headerRef}>
      <div className="wrapper" id="wrapper__header">
        <div className="header__content" id="content__header">
          <div className="info">
            <div>
              <h1>Web developer</h1>
              <p>Привет, я Влад. Программист-разработчик из Екатеринбурга, Россия 📍</p>
              <span className="info__icons">
                <a href="https://github.com/MilezGrand">
                  <img src="github.svg" alt="GitHub" width={40} height={40} />
                </a>
              </span>
            </div>
            <img src="photo.jpg" width={350} height={350} alt="me" className="avatar" />
          </div>
          <div className="skills">
            <p>Навыки</p>
            <ul>
              <li>
                <img src="nodejs.svg" alt="" width={35} height={35} />
              </li>
              <li>
                <img src="js.svg" alt="" width={35} height={35} />
              </li>
              <li>
                <img src="ts.svg" alt="" width={35} height={35} />
              </li>
              <li>
                <img src="react.svg" alt="" width={35} height={35} />
              </li>
              <li>
                <img src="redux.png" alt="" width={30} height={30} />
              </li>
              <li>
                <img src="scss.svg" alt="" width={35} height={35} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
