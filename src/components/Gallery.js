import React from "react";
import Photo from "../assets/img/slider/Rectangle2.jpg";

const Gallery = () => {
  let photos = [
    {
      id: 1,
      imgSrc: Photo,
      type: "school",
    },
    {
      id: 2,
      imgSrc: Photo,
      type: "school",
    },
    {
      id: 3,
      imgSrc: Photo,
      type: "school",
    },
    {
      id: 4,
      imgSrc: Photo,
      type: "school",
    },
    {
      id: 5,
      imgSrc: Photo,
      type: "school",
    },
    {
      id: 6,
      imgSrc: Photo,
      type: "school",
    },
    {
      id: 7,
      imgSrc: Photo,
      type: "school",
    },
    {
      id: 8,
      imgSrc: Photo,
      type: "school",
    },
  ];
  return (
    <div className="gallery">
      {photos.map((item, index) => {
        return (
          <div className="pics" key={index}>
            <img src={item.imgSrc} alt="pic" />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
