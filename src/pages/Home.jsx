import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

import Button from "../components/Button/Button";
import Modal from "../components/ModalEmail/Modal";
import SliderData from "../components/data/SliderData";

import PortfolioCard from "../components/PortfolioCard/portfolioCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax } from "react-parallax";

import ElementaryPhoto from "../assets/img/elementaryschool/8.jpg";
import PrimaryPhoto from "../assets/img/primaryschool/1.jpg";
import KinderPhoto from "../assets/img/kindergarden/5.jpg";
import ParallaxPhoto from "../assets/img/parallax.png";

import Accordion from "../components/Accordion/Accordion";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade } from "swiper/modules";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import faqList from "../components/data/faqList";

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
          <Button onClick={() => setModalActive(true)}>Задать вопрос</Button>
        </div>
      </div>
      <Parallax strength={300} bgImage={ParallaxPhoto}>
        <div className="portfolio__container">
          <h1>Портфолио</h1>
          <div className="portfolio">
            <div className="portfolio__cards">
              <Link to={"/portfolio"}>
                <PortfolioCard img={ElementaryPhoto} title="Старшая школа" />
              </Link>
              <Link to={"/primary"}>
                <PortfolioCard img={PrimaryPhoto} title="Начальная школа" />
              </Link>
              <Link to={"/kinder"}>
                <PortfolioCard img={KinderPhoto} title="Детский сад" />
              </Link>
            </div>
          </div>
        </div>
      </Parallax>
      <div className="video__container">
        <VideoPlayer />
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
