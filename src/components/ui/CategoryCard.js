import React from "react";

const CategoryCard = ({ title, image }) => {
  return (
    <div className="w-40 h-40 sm:w-48 sm:h-48 bg-white shadow-md rounded-full overflow-hidden flex flex-col items-center justify-center transform transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-lg">
        {title}
      </div>
    </div>
  );
};

export default CategoryCard;
