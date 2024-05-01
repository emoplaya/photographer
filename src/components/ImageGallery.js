import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ImageGallery = (props) => {
  console.log(props);
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
        <div
          style={{
            width: "100%",
            height: "100vh",
            background: "black",
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            zIndex: 1000,
          }}
        >
          <button
            onClick={() => imgAction()}
            style={{ position: "absolute", top: 0, right: "0" }}
          >
            x
          </button>
          <button onClick={() => imgAction("previous-img")}>prev</button>
          <img
            src={overlay.img}
            style={{
              width: "auto",
              maxWidth: "90%",
              maxHeight: "90%",
            }}
            alt=""
          />
          <button onClick={() => imgAction("next-img")}>next</button>
        </div>
      )}
      <div style={{ padding: "10px" }}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {props.data.map((image, i) => {
              return (
                <img
                  key={i}
                  style={{ width: "100%", display: "block", cursor: "pointer" }}
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

export default ImageGallery;
