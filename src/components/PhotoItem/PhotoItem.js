import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import addIcon from "../../assets/img/icons/add_icon_white.png";
import removeIcon from "../../assets/img/icons/remove_icon_red.png";
import addIconGreen from "../../assets/img/icons/add_icon_green.png";

const PhotoItem = ({ id, name, price, category, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);
  return (
    <div className="photo-item">
      <div className="photo-item-img-container">
        <img
          className="photo-item-image"
          src={url + "/images/" + image}
          alt=""
        />

        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={addIcon}
            alt=""
          />
        ) : (
          <div className="photo-item-counter">
            <img onClick={() => removeFromCart(id)} src={removeIcon} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={addIconGreen} alt="" />
          </div>
        )}
      </div>
      <div className="photo-item-info">
        <p className="photo-item-price">{price} ₽</p>
        <p className="photo-item-desc">Размер: {category}</p>
      </div>
    </div>
  );
};

export default PhotoItem;
