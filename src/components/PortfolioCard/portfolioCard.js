import React from "react";
import { forwardRef } from "react";
import { motion } from "framer-motion";

export const portfolioCard = forwardRef(({ img, title }, ref) => {
  return (
    <div className="card" ref={ref}>
      <img src={img} alt="" />
      <h2 className="card__title">{title}</h2>
    </div>
  );
});

export const MPortfolioCard = motion(portfolioCard);
