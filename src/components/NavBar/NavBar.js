import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/img/icons/logo.svg";
import cart from "../../assets/img/icons/cart.svg";
import profile from "../../assets/img/icons/profile.svg";
import bag from "../../assets/img/icons/bag.svg";
import exit from "../../assets/img/icons/exit.svg";
import { StoreContext } from "../../context/StoreContext";

const NavBar = ({ setShowLogin }) => {
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };
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
          {!token ? (
            <></>
          ) : (
            <NavLink
              to={"/photosdisplay"}
              className={({ isActive }) => (isActive ? "active" : "menu__item")}
            >
              Магазин
            </NavLink>
          )}
          {!token ? (
            <button
              className="enter__button"
              onClick={() => setShowLogin(true)}
            >
              купить фотографию
            </button>
          ) : (
            <div className="navbar-profile">
              <img width="17px" src={profile} alt="" />
              <ul className="nav-profile-dropdown">
                <li>
                  <img src={bag} alt="" />
                  <p>Заказы</p>
                </li>
                <hr />
                <li onClick={logout}>
                  <img src={exit} alt="" />
                  <p>Выйти</p>
                </li>
              </ul>
            </div>
          )}
        </ul>
      </nav>
      {!token ? (
        <></>
      ) : (
        <NavLink to={"/cart"} className="cart-icon">
          <img src={cart} alt="" />
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </NavLink>
      )}
    </header>
  );
};

export default NavBar;
