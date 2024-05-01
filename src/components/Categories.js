import React from "react";

const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const categories = ["фотосессия в студии", "фотосессия в школе"];
  return (
    <div>
      <ul className="categories">
        {categories.map((value, i) => (
          <li
            key={i}
            onClick={() => setActiveIndex(i)}
            className={
              activeIndex === i
                ? "categories__button active"
                : "categories__button"
            }
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
