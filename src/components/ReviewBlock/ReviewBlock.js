import React from "react";

const ReviewBlock = ({ name, text, image }) => {
  return (
    <div className="review">
      <img className="review__icon" src={image} />
      <div className="review__text">
        <h2>{name}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ReviewBlock;
