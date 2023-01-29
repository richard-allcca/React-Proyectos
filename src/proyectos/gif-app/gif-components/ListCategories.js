import React from "react";
import { useFetchGif } from "../../../hooks/useFetchGif";
import Loader from "../../crud-json-server/Loader";
import GifItem from "./GifItem";

const ListCategories = ({ category }) => {
  const url = `http://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=iGk4Cf4Uc0afvcm6bNLr15qT3COxulwj`;

  const { data, isPending } = useFetchGif(url);

  return (
    <>
      <h3 className="animate__animated animate__bounce animate__bounceInUp">
        { category }
      </h3>
      { isPending && Loader }
      <br />
      <div className="card-grid ">
        { data && data.map((el, id) => <GifItem key={ id } { ...el } />) }
      </div>
    </>
  );
};

export default ListCategories;

// Notas:
// then: solo necesita el nombre de la funcion y toma por defecto el 1° parametro
