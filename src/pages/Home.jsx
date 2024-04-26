import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderPhoto from "../assets/img/slider/Rectangle2.jpg";
import ParallaxPhoto from "../assets/img/parallax.png";
import { Parallax } from "react-parallax";
import Accordion from "../components/Accordion/Accordion";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const faqList = [
  {
    q: "lorem ipsum dolor sit amet",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vero sapiente aliquam molestiae nam! Quo dicta facere praesentium obcaecati voluptatum quis repellendus odit fugit? Officia dolore accusamus fugiat facilis natus!",
  },
  {
    q: "lorem ipsum dolor sit amet",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vero sapiente aliquam molestiae nam! Quo dicta facere praesentium obcaecati voluptatum quis repellendus odit fugit? Officia dolore accusamus fugiat facilis natus!",
  },
  {
    q: "lorem ipsum dolor sit amet",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vero sapiente aliquam molestiae nam! Quo dicta facere praesentium obcaecati voluptatum quis repellendus odit fugit? Officia dolore accusamus fugiat facilis natus!",
  },
  {
    q: "lorem ipsum dolor sit amet",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vero sapiente aliquam molestiae nam! Quo dicta facere praesentium obcaecati voluptatum quis repellendus odit fugit? Officia dolore accusamus fugiat facilis natus!",
  },
];
const Home = () => {
  const [modalActive, setModalActive] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_7vr1ikm", "template_w4davyr", form.current, {
        publicKey: "NpQRIKSJXHzyIwGai",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <Modal active={modalActive} setActive={setModalActive}>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form__text">
            <div className="left-line"></div>
            <h1>Оставьте заявку</h1>
            <div className="right-line"></div>
          </div>
          <label>Ваше имя</label>
          <input type="text" name="user_name" placeholder="имя" />
          <label>Ваша почта</label>
          <input type="email" name="user_email" placeholder="почта" />
          <label>Сообщение</label>
          <textarea name="message" />
          <input type="submit" value="ОТПРАВИТЬ" />
        </form>
      </Modal>
      <div className="hero">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          speed={2000}
          modules={[Autoplay, EffectFade]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={SliderPhoto} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
        </Swiper>
        <div className="hero__info">
          <div className="info__text">
            <h1>Андрей Кононов</h1>
            <h2>профессиональный фотограф</h2>
          </div>
          <Button>подробнее</Button>
        </div>
      </div>
      <div className="connection__container">
        <div className="connection__info">
          <div className="connection__text">
            <h1>Студия выпускных альбомов</h1>
            <p>
              Уже 16 лет мы изготавливаем стильные выпускные альбомы, сохраняя
              живые эмоции ваших детей в фотографиях
            </p>
          </div>
          <Button onClick={() => setModalActive(true)}>СВЯЗАТЬСЯ</Button>
        </div>
      </div>
      <Parallax strength={300} bgImage={ParallaxPhoto}>
        <div className="portfolio__container">
          <h1>Портфолио</h1>
          <div className="portfolio">
            <div className="portfolio__cards">
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
            </div>
          </div>
        </div>
      </Parallax>
      <div className="video__container">
        <div className="video"></div>
        <p>
          Для получения бесплатной консультации пишите нам в удобный для вас
          мессенджер
        </p>
        <div className="socials">
          <Button>Вконтакте</Button>
          <Button>Telegram</Button>
          <Button>Whatsapp</Button>
        </div>
      </div>
      <div className="accordion-bgc">
        <div className="accordion__container">
          <h1>FAQ</h1>
          <Accordion faqList={faqList} />
        </div>
      </div>
    </>
  );
};

export default Home;
