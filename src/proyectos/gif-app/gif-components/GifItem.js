// animation
import "animate.css";
import Prototypes from "prop-types";
import React from "react";

const GifItem = ({ title, images }) => {
  const { url } = images.downsized_medium;
  return (
    <div className="card animate__animated animate__bounce animate__fadeIn">
      <img src={url} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default GifItem;

GifItem.prototypes = {
  title: Prototypes.string.isRequired,
};

// Notas:
// Props: traidas con spread operators desde (ListCategories)
