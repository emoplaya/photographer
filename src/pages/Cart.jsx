import React, { useContext } from "react";
import { StoreContext } from "../components/context/StoreContext";

const Cart = () => {
  const { cartItems, photo_list, removeFromCart } = useContext(StoreContext);
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>price</p>
          <p>Quantity</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {photo_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className="cart-items-title cart-items-item">
                <p>{item.name}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
