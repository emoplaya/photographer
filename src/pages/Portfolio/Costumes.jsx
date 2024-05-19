import React from "react";
import PortfolioNavBar from "../../components/PortfolioNavbar/PortfolioNavBar";
import costumesData from "../../components/data/costumesData";
import ImageGalleryCostumes from "../../components/Gallery/ImageGalleryCostumes";

const Costumes = () => {
  return (
    <>
      <PortfolioNavBar />
      <ImageGalleryCostumes data={costumesData} />
    </>
  );
};

export default Costumes;
