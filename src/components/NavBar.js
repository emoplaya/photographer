import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import vk from "../assets/img/vk-icon.svg";
import telegram from "../assets/img/telegram-icon.svg";
import whatsapp from "../assets/img/whatsapp-icon.svg";

const NavBar = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img width="201" height="48" src={logo} alt="logo" />
      </div>
      <nav className="header__menu menu">
        <ul className="menu__list">
          <Link to={"/"}>
            <li className="menu__item">Главная</li>
          </Link>
          <Link to={"/portfolio"}>
            <li className="menu__item">Портфолио</li>
          </Link>
          <li className="menu__item">Альбомы</li>
          <Link to={"/reviews"}>
            <li className="menu__item">Отзывы</li>
          </Link>
          <Link to={"/contacts"}>
            <li className="menu__item">Контакты</li>
          </Link>
        </ul>
      </nav>
      <div className="header__socials">
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
      </div>
    </header>
  );
};

export default NavBar;
