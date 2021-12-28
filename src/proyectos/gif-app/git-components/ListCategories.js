import React from "react";
import { useFetchGif } from "../../../hooks/useFetchGif";
import Loader from "../../crud-json-server/Loader";
import GifItem from "./GifItem";

const ListCategories = ({ category, url }) => {
  const { data, isPending, error } = useFetchGif(url);

  return (
    <>
      {isPending && Loader}
      <h3 className="animate__animated animate__bounce animate__bounceInUp">
        {category}
      </h3>
      <br />
      <div className="card-grid ">
        {data && data.map((el, id) => <GifItem key={id} {...el} />)}
      </div>
    </>
  );
};

export default ListCategories;

// Notas:
// then: solo necesita el nombre de la funcion y toma por defecto el 1° parametro
