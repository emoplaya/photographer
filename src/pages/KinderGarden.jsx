import React from "react";
import Categories from "../components/Categories";
import PortfolioNavBar from "../components/PortfolioNavBar";
import ImageGallery from "../components/ImageGallery";
import kinderData from "../components/data/kinderData";
const KinderGarden = () => {
  return (
    <div>
      <PortfolioNavBar />
      <Categories />;
      <ImageGallery data={kinderData} />
    </div>
  );
};

export default KinderGarden;
