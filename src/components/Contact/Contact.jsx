import React from 'react';
import './style.css';

const Contact = ({contactRef}) => {
  return (
    <section className="contact" ref={contactRef}>
      <div className="container" id="container__contact">
        <div className="content" id="content_contact">
          <h4>КОНТАКТЫ</h4>
          <h3>Не стесняйся! Напиши мне! 👇</h3>
          <ul>
            <li>
              <span>
                <img src="location.png" alt="" width={35} height={30} />
              </span>

              <div>
                <h4>Локация</h4>
                <p>Екатеринбург, Россия</p>
              </div>
            </li>
            <li>
              <span>
                <img src="mail.png" alt="" width={35} height={25} />
              </span>

              <div>
                <h4>Почта</h4>
                <p>normsvlad@yandex.ru</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
