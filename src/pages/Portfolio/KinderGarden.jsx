import React from "react";
import PortfolioNavBar from "../../components/PortfolioNavbar/PortfolioNavBar";
import ImageGalleryForGarden from "../../components/Gallery/ImageGalleryForGarden";
import kinderData from "../../components/data/kinderData";
const KinderGarden = () => {
  return (
    <>
      <PortfolioNavBar />
      <ImageGalleryForGarden data={kinderData} />
    </>
  );
};

export default KinderGarden;
