import React, { useEffect } from "react";
import { preLoaderAnim } from "../../animations";

const Preloader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Эстетика</span>
        <span>Стиль</span>
        <span>Эмоции</span>
      </div>
    </div>
  );
};

export default Preloader;
