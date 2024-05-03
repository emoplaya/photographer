import React from "react";

const ReviewBlock = ({ name, text }) => {
  return (
    <div className="review">
      <div className="review__icon"></div>
      <div className="review__text">
        <h2>{name}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ReviewBlock;
