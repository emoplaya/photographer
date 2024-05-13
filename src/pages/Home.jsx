import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";

import { MButton } from "../components/Button/Button";
import Modal from "../components/ModalEmail/Modal";
import SliderData from "../components/data/SliderData";
import { MPortfolioCard } from "../components/PortfolioCard/portfolioCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax } from "react-parallax";

import ElementaryPhoto from "../assets/img/elementaryschool/8.jpg";
import PrimaryPhoto from "../assets/img/primaryschool/1.jpg";
import KinderPhoto from "../assets/img/kindergarden/5.jpg";
import ParallaxPhoto from "../assets/img/parallax.png";

import { MAccordion } from "../components/Accordion/Accordion";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade } from "swiper/modules";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import faqList from "../components/data/faqList";

const Home = () => {
  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.7 },
    }),
  };
  const connectionAnimation = {
    hidden: {
      y: 0,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.7 },
    }),
  };

  const cardAnimation = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.7 },
    }),
  };

  const btnAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.7 },
    }),
  };

  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

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
        <form className="modal-form" ref={form} onSubmit={sendEmail}>
          <div className="modal-form__text">
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

      <motion.div
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
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
        <motion.div
          className="hero__info"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          <motion.div className="info__text" variants={textAnimation}>
            <motion.h1 custom={1} variants={textAnimation}>
              Андрей Кононов
            </motion.h1>
            <motion.h2 custom={2} variants={textAnimation}>
              профессиональный фотограф
            </motion.h2>
          </motion.div>
          <motion.button
            custom={3}
            variants={textAnimation}
            onClick={handleClick}
          >
            подробнее
          </motion.button>
        </motion.div>
      </motion.div>
      <div className="hero__overlay"></div>
      <motion.div
        className="connection__container"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
      >
        <motion.div className="connection__info">
          <div className="connection__text">
            <motion.h1 custom={1} variants={connectionAnimation}>
              Студия выпускных альбомов
            </motion.h1>
            <motion.p custom={2} variants={connectionAnimation}>
              Уже 16 лет мы изготавливаем стильные выпускные альбомы, сохраняя
              живые эмоции ваших детей в фотографиях
            </motion.p>
          </div>
          <MButton
            custom={3}
            variants={connectionAnimation}
            onClick={() => setModalActive(true)}
          >
            Задать вопрос
          </MButton>
        </motion.div>
      </motion.div>
      <Parallax strength={300} bgImage={ParallaxPhoto}>
        <motion.div
          className="portfolio__container"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          <motion.h1 custom={1} variants={connectionAnimation}>
            Портфолио
          </motion.h1>
          <div className="portfolio" ref={ref}>
            <motion.div
              className="portfolio__cards"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
            >
              <Link to={"/portfolio"}>
                <MPortfolioCard
                  img={ElementaryPhoto}
                  title="Старшая школа"
                  custom={1}
                  variants={cardAnimation}
                />
              </Link>
              <Link to={"/primary"}>
                <MPortfolioCard
                  img={PrimaryPhoto}
                  title="Начальная школа"
                  custom={2}
                  variants={cardAnimation}
                />
              </Link>
              <Link to={"/kinder"}>
                <MPortfolioCard
                  img={KinderPhoto}
                  title="Детский сад"
                  custom={3}
                  variants={cardAnimation}
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </Parallax>
      <motion.div
        className="video__container"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 1, once: true }}
      >
        <VideoPlayer />
        <motion.p variants={textAnimation} custom={1}>
          Для получения бесплатной консультации пишите нам в удобный для вас
          мессенджер
        </motion.p>
        <motion.div className="socials" variants={textAnimation} custom={2}>
          <button className="connection__button vk">Вконтакте</button>
          <button className="connection__button tg">Telegram</button>
          <button className="connection__button ws">Whatsapp</button>
        </motion.div>
      </motion.div>
      <motion.div
        className="accordion-bgc"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }}
      >
        <div className="accordion__container">
          <motion.h1 variants={cardAnimation}>FAQ</motion.h1>
          <MAccordion faqList={faqList} variants={btnAnimation} />
        </div>
      </motion.div>
    </>
  );
};

export default Home;
