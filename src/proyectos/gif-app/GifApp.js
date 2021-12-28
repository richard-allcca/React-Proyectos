import React, { useState } from "react";
import FormSearch from "./git-components/FormSearch";
import ListCategories from "./git-components/ListCategories";

const GifApp = () => {
  const [categories, setCategories] = useState("");

  const handleAdd = (inputValue) => {
    setCategories(inputValue);
  };

  return (
    <div className="gif-app-container">
      <h2>Soy una App Gif</h2>
      <FormSearch handleAdd={handleAdd} />

      <hr />
      {categories && (
        <ListCategories
          key={categories}
          category={categories}
          url={`http://api.giphy.com/v1/gifs/search?q=${categories}&limit=10&api_key=iGk4Cf4Uc0afvcm6bNLr15qT3COxulwj`}
        />
      )}
    </div>
  );
};

export default GifApp;
