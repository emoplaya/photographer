import React, { useContext, useEffect, useRef } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, photos_list, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart__container">
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Фотографии</p>
            <p>Название</p>
            <p>Цена</p>
            <p>Количество</p>
            <p>Итого</p>
            <p>Удалить</p>
          </div>
          <br />
          <hr />
          {photos_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div>
                  <div className="cart-items-title cart-items-item">
                    {/* Заменяем <img> на <canvas> */}
                    <canvas
                      ref={(canvasRef) => {
                        if (canvasRef) {
                          const canvas = canvasRef;
                          const ctx = canvas.getContext("2d");
                          const img = new Image();
                          img.src = url + "/images/" + item.image;
                          img.onload = () => {
                            ctx.drawImage(
                              img,
                              0,
                              0,
                              canvas.width,
                              canvas.height
                            );
                          };
                          canvas.oncontextmenu = () => false; // Предотвращаем скачивание
                        }
                      }}
                      width="100" // Задайте желаемый размер
                      height="150" // Задайте желаемый размер
                      key={item._id}
                    />
                    <p>{item.name}</p>
                    <p>{item.price} ₽</p>
                    <p>{cartItems[item._id]}</p>
                    <p>{item.price * cartItems[item._id] + " ₽"}</p>
                    <p
                      onClick={() => removeFromCart(item._id)}
                      className="cross"
                    >
                      X
                    </p>
                  </div>
                  <hr />
                </div>
              );
            }
          })}
        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Корзина</h2>
            <div>
              <hr />
              <div className="cart-total-details">
                <b>Итого</b>
                <b>{getTotalCartAmount()} ₽</b>
              </div>
            </div>
            <button onClick={() => navigate("/order")}>Перейти к оплате</button>
          </div>
          <div className="cart-promocode">
            <p>Введите промокод</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="промокод" />
              <button>Подтвердить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
