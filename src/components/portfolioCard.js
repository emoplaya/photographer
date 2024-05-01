import React from "react";

const portfolioCard = ({ img, title }) => {
  return (
    <div className="card">
      <article className="card__article">
        <img src={img} alt="" />
        <div className="card__data">
          <h2 className="card__title">{title}</h2>
        </div>
      </article>
    </div>
  );
};

export default portfolioCard;
