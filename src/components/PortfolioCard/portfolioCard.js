import React from "react";

const portfolioCard = ({ img, title }) => {
  return (
    <div className="card">
      <img src={img} alt="" />
      <h2 className="card__title">{title}</h2>
    </div>
  );
};

export default portfolioCard;
