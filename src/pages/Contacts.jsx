import React from "react";
import vk from "../assets/img/vk-icon.svg";
import telegram from "../assets/img/telegram-icon.svg";
import whatsapp from "../assets/img/whatsapp-icon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderPhoto from "../assets/img/slider/Rectangle2.jpg";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

const Contacts = () => {
  return (
    <>
      <div className="contacts__container">
        <div className="contacts">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"3"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination]}
            className="swiper_container"
          >
            <SwiperSlide>
              <img src={SliderPhoto} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={SliderPhoto} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={SliderPhoto} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={SliderPhoto} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={SliderPhoto} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={SliderPhoto} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={SliderPhoto} alt="slide_image" />
            </SwiperSlide>
          </Swiper>
          <p>
            Для консультации и записи на съемку выберите привычный способ
            общения
          </p>
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
        </div>
      </div>
    </>
  );
};

export default Contacts;
