import React, { useContext, useEffect, useRef } from "react";
import { StoreContext } from "../../context/StoreContext";
import addIcon from "../../assets/img/icons/add_icon_white.png";
import removeIcon from "../../assets/img/icons/remove_icon_red.png";
import addIconGreen from "../../assets/img/icons/add_icon_green.png";

const PhotoItem = ({ id, name, price, category, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = url + "/images/" + image;
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    // Предотвращение скачивания изображения через canvas
    canvas.oncontextmenu = () => false;
  }, [url, image]);

  return (
    <div className="photo-item">
      <div className="photo-item-img-container">
        <canvas
          ref={canvasRef}
          className="photo-item-image"
          width="283"
          height="427.5"
        ></canvas>
        {/* Добавляем водяной знак */}
        <div className="watermark"></div>

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
