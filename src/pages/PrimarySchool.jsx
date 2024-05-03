import React from "react";
import PortfolioNavBar from "../components/PortfolioNavBar";
import ImageGallery from "../components/ImageGallery";
import primaryData from "../components/data/primaryData";
const PrimarySchool = () => {
  return (
    <>
      <PortfolioNavBar />
      <ImageGallery data={primaryData} />
    </>
  );
};

export default PrimarySchool;
