import React from "react";

import ImageGallery from "../components/Gallery/ImageGallery";
import PortfolioNavBar from "../components/PortfolioNavbar/PortfolioNavBar";
import elementaryData from "../components/data/elementaryData";

const Portfolio = () => {
  return (
    <>
      <PortfolioNavBar />
      <ImageGallery data={elementaryData} />
    </>
  );
};

export default Portfolio;
