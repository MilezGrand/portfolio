import React from 'react';
import './style.css';

const About = ({ aboutRef }) => {
  return (
    <section className="about" ref={aboutRef}>
      <div className="container" id="container__about">
        <div className="img-side">
          <img src="about.jpg" alt="notebook" width={410} height={350} />
          <img src="text.svg" alt="developer" width={200} height={200} id="text-round" />
          <img src="working-emoji.png" alt="work" width={60} height={60} id="work-emoji" />
        </div>
        <div className="text-side">
          <h4>ОБО МНЕ</h4>
          <h3>Веб-разработчик из Екатеринбурга, Россия 📍</h3>
          <p>
            Занимаюсь веб-разработкой с 8 класа. За это время я собрал впечатляющий арсенал навыков
            в HTML, CSS, JavaScript, TypeScript, React, Redux и SCSS. Я преуспеваю в разработке и
            обслуживании адаптивных веб-сайтов. Имеется опыт не только в создании интерфейсов, но и
            в серверной разработке, а так же в тестировании.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
