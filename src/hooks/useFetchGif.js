import { useEffect, useState } from "react";
// import getGif from "../helpers/searchGif";

export const useFetchGif = (url) => {
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
            statusText: !res.statusText ? "Ocurrio un error" : res.statusText,
          };
          throw errorThorw;
        }

        let datos = await res.json();
        let { data } = datos; //! agregado solo para usar con gif-app
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

//! metodo de fernando
// export const useFetchGif = (category) => {
//   const [state, setState] = useState({
//     data: [],
//     loading: true,
//   });

//   useEffect(() => {
//     getGif(category).then((data) => {
//       setState({
//         data,
//         loading: false,
//       });
//     });
//   }, [category]);

//   return state;
// };
