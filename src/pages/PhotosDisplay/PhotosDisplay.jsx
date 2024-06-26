import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import PhotoItem from "../../components/PhotoItem/PhotoItem";

const PhotosDisplay = () => {
  const { photos_list } = useContext(StoreContext);

  return (
    <div className="background">
      <div className="photo__container">
        <div className="photo-display-container">
          <div className="photo-display" id="photo-display">
            <h2>Фотографии</h2>
            <div className="photo-display-list">
              {photos_list.map((item, index) => {
                return (
                  <PhotoItem
                    key={index}
                    id={item._id}
                    category={item.category}
                    image={item.image}
                    price={item.price}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotosDisplay;
