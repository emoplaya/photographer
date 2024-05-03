import React, { useState } from "react";
import ImageGallery from "../components/ImageGallery";
import PortfolioNavBar from "../components/PortfolioNavBar";
import elementaryData from "../components/data/elementaryData";

const Portfolio = () => {
  const [categoryId, setCategoryId] = React.useState(0);
  return (
    <>
      <PortfolioNavBar />
      <ImageGallery data={elementaryData} />
    </>
  );
};

export default Portfolio;
