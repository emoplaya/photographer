import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, photos_list, cartItems, url } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    photos_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    console.log(orderItems);
  };

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Information</p>
        <div className="multi-fields">
          <input
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            type="text"
            placeholder="Ваше имя"
          />
          <input
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            type="text"
            placeholder="Ваша фамилия"
          />
        </div>
        <input
          type="email"
          onChange={onChangeHandler}
          value={data.email}
          placeholder="Почта"
        />
        <input
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          type="text"
          placeholder="Телефон"
        />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Корзина</h2>
          <div>
            <hr />
            <div className="cart-total-details">
              <p>Итого</p>
              <p>{getTotalCartAmount()} ₽</p>
            </div>
            <hr />
          </div>
          <button type="submit">оформить заказ</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
