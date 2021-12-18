// usado en SelectList
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        let res = await fetch(url);

        if (!res.ok) {
          let errorThorw = {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrio un Error" : res.statusText,
          };
          throw errorThorw;
        }

        let data = await res.json();

        setIsPending(false);
        setError({ error: false });
        setData(data);
      } catch (error) {
        setError(error);
        setIsPending(false);
      }
    };
    getData(url);
  }, [url]);

  return { data, isPending, error };
};
