import React from "react";
import PortfolioNavBar from "../components/PortfolioNavBar";
import ImageGalleryForGarden from "../components/ImageGalleryForGarden";
import kinderData from "../components/data/kinderData";
const KinderGarden = () => {
  return (
    <>
      <PortfolioNavBar />
      <ImageGalleryForGarden data={kinderData} />
    </>
  );
};

export default KinderGarden;
