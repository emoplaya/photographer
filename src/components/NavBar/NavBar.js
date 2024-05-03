import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/icons/logo.svg";

const NavBar = () => {
  return (
    <header className="header">
      <NavLink to={"/"}>
        <div className="header__logo">
          <img width="201" height="48" src={logo} alt="logo" />
        </div>
      </NavLink>
      <nav className="header__menu menu">
        <ul className="menu__list">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active" : "menu__item")}
          >
            Главная
          </NavLink>
          <NavLink
            to={"/portfolio"}
            className={({ isActive }) => (isActive ? "active" : "menu__item")}
          >
            Портфолио
          </NavLink>
          <NavLink
            to={"/reviews"}
            className={({ isActive }) => (isActive ? "active" : "menu__item")}
          >
            Отзывы
          </NavLink>
          <NavLink
            to={"/contacts"}
            className={({ isActive }) => (isActive ? "active" : "menu__item")}
          >
            Контакты
          </NavLink>
        </ul>
      </nav>
      <NavLink to={"/login"} className="enter__button">
        купить фотографию
      </NavLink>
    </header>
  );
};

export default NavBar;
