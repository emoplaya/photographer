import React from "react";
import PortfolioNavBar from "../components/PortfolioNavbar/PortfolioNavBar";
import ImageGallery from "../components/Gallery/ImageGallery";
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
