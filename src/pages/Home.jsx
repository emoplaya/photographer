import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "../components/Button";
import Modal from "../components/Modal";
import PortfolioCard from "../components/portfolioCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderData from "../components/SliderData";
import ElementaryPhoto from "../assets/img/elementaryschool/8.jpg";
import PrimaryPhoto from "../assets/img/primaryschool/1.jpg";
import KinderPhoto from "../assets/img/kindergarden/5.jpg";
import ParallaxPhoto from "../assets/img/parallax.png";
import { Parallax } from "react-parallax";
import Accordion from "../components/Accordion/Accordion";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade } from "swiper/modules";

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
            <img src={SliderData[0]} alt="slide1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={SliderData[1]} alt="slide2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={SliderData[2]} alt="slide3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={SliderData[3]} alt="slide4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={SliderData[4]} alt="slide5" />
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
      <div className="hero__overlay"></div>
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
              <PortfolioCard img={ElementaryPhoto} title="Старшая школа" />
              <PortfolioCard img={PrimaryPhoto} title="Начальная школа" />
              <PortfolioCard img={KinderPhoto} title="Детский сад" />
            </div>
          </div>
        </div>
      </Parallax>
      <div className="video__container">
        <iframe
          title="video"
          className="video"
          src="https://www.youtube.com/embed/N7Ps9L2JhXs?playlist=N7Ps9L2JhXs&loop=1&autoplay=1&mute=1"
          allow="autoplay"
          loop="1"
        />

        <p>
          Для получения бесплатной консультации пишите нам в удобный для вас
          мессенджер
        </p>
        <div className="socials">
          <button className="connection__button vk">Вконтакте</button>
          <button className="connection__button tg">Telegram</button>
          <button className="connection__button ws">Whatsapp</button>
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
