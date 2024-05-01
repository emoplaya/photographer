import React from "react";
import Categories from "../components/Categories";
import PortfolioNavBar from "../components/PortfolioNavBar";
import ImageGallery from "../components/ImageGallery";
import primaryData from "../components/data/primaryData";
const PrimarySchool = () => {
  return (
    <>
      <PortfolioNavBar />
      <Categories />;
      <ImageGallery data={primaryData} />
    </>
  );
};

export default PrimarySchool;
