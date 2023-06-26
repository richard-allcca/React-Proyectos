import React, { useState, useEffect } from "react";

import { helperHttp } from "./../../helpers/helperHttp";

import CrudForm from "../crud/CrudForm";
import Loader from "./Loader";
import Message from "./Message";
import CrudTable from "../crud/CrudTable";

export const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setdataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helperHttp();
  let url = "http://localhost:5000/santos";

  useEffect(() => {
    setLoading(true);
    // helper directo para evitar problemas pero en el resto usamos "api."
    helperHttp()
      .get(url)
      .then((res) => {
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

  const createData = (data) => {
    data.id = Date.now();

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    // .post(url, { body: data })
    api.post(url, options)
      .then((res) => {
        console.log(res);
        if (!res.err) {
          setDb([...db, res]); // lo que tiene db y le agrega la q viene en res
        } else {
          setError(res);
        }
      });
  };

  const updateData = (newElement) => {
    let endpoint = `${url}/${newElement.id}`;
    let options = {
      body: newElement,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = db.map((oldElement) => (oldElement.id === newElement.id ? newElement : oldElement));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

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

  return (
    <>
      <h2>{ 'CRUD API' }</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={ createData }
          updateData={ updateData }
          dataToEdit={ dataToEdit }
          eventEdit={ setdataToEdit }
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
            eventEdit={ setdataToEdit }
            deleteData={ deleteData }
          />
        ) }
      </article>
    </>
  );
};

export default CrudApi;
