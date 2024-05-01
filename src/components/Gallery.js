import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Images from "./Images";
import { slides } from "./data";
import "yet-another-react-lightbox/styles.css";
import {
  Captions,
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const Gallery = () => {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <Images
        data={slides}
        onClick={(currentIndex) => setIndex(currentIndex)}
      />

      <Lightbox
        plugins={[Captions, Fullscreen, Zoom, Thumbnails]}
        captions={{
          showToggle: true,
          descriptionTextAlign: "end",
        }}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </>
  );
};

export default Gallery;
