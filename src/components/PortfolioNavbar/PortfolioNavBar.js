import React from "react";
import { NavLink } from "react-router-dom";

const PortfolioNavBar = () => {
  return (
    <div className="navbar__container">
      <div className="navbar">
        <ul className="navbar__menu">
          <NavLink
            to={"/portfolio"}
            className={({ isActive }) => (isActive ? "active" : "navbar__item")}
          >
            Старшая школа
          </NavLink>

          <NavLink
            to={"/primary"}
            className={({ isActive }) => (isActive ? "active" : "navbar__item")}
          >
            Начальная школа
          </NavLink>
          <NavLink
            to={"/kinder"}
            className={({ isActive }) => (isActive ? "active" : "navbar__item")}
          >
            Детский сад
          </NavLink>
          <NavLink
            to={"/costumes"}
            className={({ isActive }) => (isActive ? "active" : "navbar__item")}
          >
            Костюмированная Фотосессия
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default PortfolioNavBar;
