import React, { useContext, useState } from "react";
import close from "../../assets/img/icons/close.svg";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);

  const [currentState, setCurrentState] = useState("Войти");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currentState === "Войти") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img onClick={() => setShowLogin(false)} src={close} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Войти" ? (
            <></>
          ) : (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Ваше имя"
              required
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Email"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Пароль"
            required
          />
        </div>
        <button type="submit">
          {currentState === "Регистрация" ? "Создать аккаунт" : "Войти"}
        </button>
        <div className="login-popup-condition">
          <input className="checkbox" type="checkbox" required />
          <p>Я согласен с обработкой персональных данных</p>
        </div>
        {currentState === "Войти" ? (
          <p>
            У вас нет аккаунта?{" "}
            <span onClick={() => setCurrentState("Регистрация")}>
              Зарегистрируйтесь
            </span>
          </p>
        ) : (
          <p>
            Уже есть аккаунт?{" "}
            <span onClick={() => setCurrentState("Войти")}>Войти</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
