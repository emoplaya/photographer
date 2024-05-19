import React from "react";

import ImageGallery from "../../components/Gallery/ImageGallery";
import PortfolioNavBar from "../../components/PortfolioNavbar/PortfolioNavBar";
import elementaryData from "../../components/data/elementaryData";
import Preloader from "../../components/Preloader/Preloader";

const Portfolio = () => {
  return (
    <>
      {/* <Preloader /> */}
      <PortfolioNavBar />
      <ImageGallery data={elementaryData} />
    </>
  );
};

export default Portfolio;
