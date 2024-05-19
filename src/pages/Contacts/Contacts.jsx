import React from "react";
import { motion } from "framer-motion";
import vk from "../../assets/img/icons/vk-icon.svg";
import telegram from "../../assets/img/icons/telegram-icon.svg";
import whatsapp from "../../assets/img/icons/whatsapp-icon.svg";

import ContactsSlider from "../../components/data/ContactsSliderData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow } from "swiper/modules";

const Contacts = () => {
  return (
    <>
      <motion.div
        className="contacts"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Swiper
          effect={"coverflow"}
          autoplay={{
            disableOnInteraction: false,
            enabled: true,
            delay: 1500,
            pauseOnMouseEnter: true,
          }}
          grabCursor={true}
          centeredSlides={false}
          loop={true}
          slidesPerView={"3"} // Увеличьте это значение, если необходимо больше слайдов в одном ряду
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          centerInsufficientSlides={false}
          speed={2000}
          modules={[Autoplay, EffectCoverflow]}
          className="contacts-swiper"
        >
          <SwiperSlide>
            <img src={ContactsSlider[0]} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ContactsSlider[1]} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ContactsSlider[2]} alt="slide_image" />
          </SwiperSlide>
        </Swiper>
        <div className="contacts__container">
          <p>
            Для консультации и записи на съемку выберите привычный способ
            общения
          </p>
        </div>
        <div className="contacts-text">
          <div className="left-line"></div>
          <h1>Контакты</h1>
          <div className="right-line"></div>
        </div>
        <h2>+7 (917) 556-0984</h2>
        <ul className="social__list">
          <li className="socials__item">
            <img width="27" height="27" src={telegram} alt="logo" />
          </li>
          <li className="socials__item">
            <img width="27" height="27" src={vk} alt="logo" />
          </li>
          <li className="socials__item">
            <img width="27" height="27" src={whatsapp} alt="logo" />
          </li>
        </ul>
        <p>г. Москва и Московская область</p>
      </motion.div>
    </>
  );
};

export default Contacts;
