import React from "react";
// animation
import "animate.css";

const GifItem = ({ title, id, images }) => {
  const { downsized_medium } = images;
  const { url } = downsized_medium;
  return (
    <div className="card animate__animated animate__bounce animate__fadeIn">
      <img src={url} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default GifItem;

// Notas:
// Props: traidas con spread operators desde (ListCategories)
