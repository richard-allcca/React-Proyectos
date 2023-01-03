import React, { useState, useEffect } from "react";

import { helperHttp } from "./../../helpers/helperHttp";

import CrudForm from "../crud/CrudForm";
import Loader from "./Loader";
import Message from "./Message";
import CrudTable from "../crud/CrudTable";

export const CrudApi = () => {
  const [db, setDb] = useState(null); // si inicia en null condiciona su renderizado en return
  const [dataToEdit, setdataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helperHttp(); //comentado para evitar el warning de []
  let url = "http://localhost:5000/santos";

  useEffect(() => {
    setLoading(true);
    //! aqui usamos helper directo por el warning de console pero en el resto usamos "api."
    helperHttp()
      .get(url)
      .then((res) => {
        // console.log(res);
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setError(res);
          setDb(null);
        }
        setLoading(false);
      });
  }, [url]);

  // =================================================================
  //? CREATE
  // =================================================================
  const createData = (data) => {
    data.id = Date.now();

    // la cabezera es importante para enviar los datos a la api
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options)
      // .post(url, { body: data })
      .then((res) => {
        console.log(res);
        if (!res.err) {
          setDb([...db, res]); // lo que tiene db y le agrega la q viene en res
        } else {
          setError(res);
        }
      });
  };

  // =================================================================
  //? UPDATE
  // =================================================================
  const updateData = (newElement) => {
    let endpoint = `${url}/${newElement.id}`;
    // console.log(endpoint);
    let options = {
      body: newElement,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      // console.log(res);
      if (!res.err) {
        let newData = db.map((oldElement) => (oldElement.id === newElement.id ? newElement : oldElement));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  // =================================================================
  //? DELETE
  // =================================================================
  const deleteData = (id) => {
    let isDelete = window.confirm(`¿Estas seguro de Eliminar el ID ${id}?`);

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };
      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData); //agregamos contenido filtrando el id del parametro
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  // =================================================================
  return (
    <>
      <h2> CRUD API</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={ createData }
          updateData={ updateData }
          dataToEdit={ dataToEdit }
          setdataToEdit={ setdataToEdit }
        />
        { loading && <Loader /> }
        { error && (
          <Message
            bgColor="#dc3545"
            msg={ `Error ${error.status}: ${error.statusText} ` }
          />
        ) }
        { db && (
          <CrudTable
            data={ db }
            setdataToEdit={ setdataToEdit }
            deleteData={ deleteData }
          />
        ) }
      </article>
    </>
  );
};

export default CrudApi;
