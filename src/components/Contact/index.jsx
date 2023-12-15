import React from "react";
import "./style.css";

const Contact = ({ contactRef }) => {
  return (
    <section className="contact reveal" ref={contactRef} id="contacts">
      <div className="wrapper" id="container__contact">
        <div className="content" id="content_contact">
          <h4>КОНТАКТЫ</h4>
          <h3>Не стесняйся! Напиши мне! 👇</h3>
          <ul>
            <li>
              <span>
                <img
                  src="/portfolio/location.svg"
                  alt=""
                  width={35}
                  height={30}
                />
              </span>

              <div>
                <h4>Локация</h4>
                <p>Екатеринбург, Россия</p>
              </div>
            </li>
            <li>
              <span>
                <img src="/portfolio/mail.svg" alt="" width={55} height={45} />
              </span>

              <div>
                <h4>Почта</h4>
                <p>normsvlad@yandex.ru</p>
              </div>
            </li>
            <li>
              <span>
                <img
                  src="/portfolio/telegram.svg"
                  alt=""
                  width={40}
                  height={40}
                />
              </span>

              <div>
                <h4>Telegram</h4>
                <p>@VladMilezGrand</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
