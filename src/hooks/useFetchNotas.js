// NO importamos "React" solo hooks
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {

      try {
        let res = await fetch(url);

        if (!res.ok) {
          // creando un obj para throw
          const errorThrow = {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrio un error" : res.statusText,
          };
          throw errorThrow;
          // ===============================
          //! otra froma de manejar el error con throw
          // throw new Error ({
          //   err: true,
          //   status: res.status,
          //   statusText: !res.statusText ? "Ocurrio un error" : res.statusText,
          // });
        }

        let data = await res.json();

        setIsPending(false);
        setData(data);
        setError({ err: false });
      } catch (err) {
        setIsPending(false);
        setError(err);
      }
    };

    getData(url); // ejecutara la petición
  }, [url]); //? se ejecutara cuando cambie la url que viene como parametro

  return { data, isPending, error };
};
