import React from "react";
import "./style.css";

const About = ({ aboutRef }) => {
  return (
    <section className="about reveal" ref={aboutRef} id='about'>
      <div className="wrapper about__container">
        <div className="about__img-side">
          <img
            src="/portfolio/about.jpg"
            alt="notebook"
            width={410}
            height={350}
          />
          <img
            src="/portfolio/text.svg"
            alt="developer"
            width={200}
            height={200}
            id="text-round"
          />
          <img
            src="/portfolio/working-emoji.png"
            alt="work"
            width={60}
            height={60}
            id="work-emoji"
          />
        </div>
        <div className="about__text-side">
          <h4>ОБО МНЕ</h4>
          <h3>Веб-разработчик из Екатеринбурга, Россия 📍</h3>
          <p>
            Изучаю веб-разработку около 5-ти лет, 2 года из которых занимаюсь
            разработкой серьёзных веб-приложений. За это время я собрал
            впечатляющий арсенал навыков в JavaScript, TypeScript, React, Redux
            и других библиотеках и инструментах разработки. Имеется опыт не
            только в создании интерфейсов, но и в серверной разработке, а так же
            в тестировании.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
