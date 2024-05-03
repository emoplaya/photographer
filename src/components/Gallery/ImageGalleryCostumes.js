import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ArrowLeft from "../../assets/img/icons/left-arrow.svg";
import ArrowRight from "../../assets/img/icons/right-arrow.svg";
import Close from "../../assets/img/icons/close.svg";
const ImageGalleryCostumes = (props) => {
  const [overlay, setOverlay] = useState({ img: "", i: 0 });
  const viewImage = (img, i) => {
    setOverlay({ img, i });
  };
  let images = props.data.map((image) => image.src);
  const imgAction = (action) => {
    let i = overlay.i;
    if (action === "next-img") {
      setOverlay({ img: images[i + 1], i: i + 1 });
    }
    if (action === "previous-img") {
      setOverlay({ img: images[i - 1], i: i - 1 });
    }
    if (!action) {
      setOverlay({ img: "", i: 0 });
    }
  };
  return (
    <>
      {overlay.img && (
        <div className="overlay">
          <button
            className="overlay__close"
            onClick={() => imgAction()}
            style={{ position: "absolute", top: 0, right: "0" }}
          >
            <img src={Close} alt="" />
          </button>
          <button
            className="overlay__prev"
            onClick={() => imgAction("previous-img")}
          >
            <img src={ArrowLeft} alt="" />
          </button>
          <img
            src={overlay.img}
            style={{
              width: "auto",
              maxWidth: "90%",
              maxHeight: "90%",
            }}
            alt=""
          />
          <button
            className="overlay__next"
            onClick={() => imgAction("next-img")}
          >
            <img src={ArrowRight} alt="" />
          </button>
        </div>
      )}
      <div style={{ padding: "20px 100px" }}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {props.data.map((image, i) => {
              return (
                <img
                  key={i}
                  style={{
                    width: "100%",
                    display: "block",
                    cursor: "pointer",
                  }}
                  src={image.src}
                  alt=""
                  onClick={() => viewImage(image.src, i)}
                />
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default ImageGalleryCostumes;
