import React, { useState } from "react";
import FormSearch from "./gif-components/FormSearch";
import ListCategories from "./gif-components/ListCategories";

const GifApp = () => {
  const [categories, setCategories] = useState("");

  //? se puede usar solo el "setCategories" en el submit del form (no recomendable) sin handleAdd
  const handleAdd = (inputValue) => {
    console.log(inputValue);
    setCategories(inputValue);
  };

  return (
    <div className="gif-app-container">
      <h2>Soy una App Gif</h2>
      <FormSearch handleAdd={handleAdd} />

      <hr />
      {categories && <ListCategories key={categories} category={categories} />}
    </div>
  );
};

export default GifApp;
