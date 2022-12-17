export const helperHttp = () => {
   const customFetch = (endpoint, options) => {
      const defaultHeader = {
         accept: "application/json",
         // ? si necesitas otra cabezera ademas de "accept" enviala desde la peticion para evitar fallos
      };

      const controller = new AbortController(); //instancia de control de petición

      options.signal = controller.signal; //metodo asignado para abortar petición

      options.method = options.method || "GET";

      // uniendo defaultHeader con options o usar el predeterminado ln/3
      options.headers = options.headers
         ? { ...defaultHeader, ...options.headers }
         : defaultHeader;

      // si viene un "body" los convertimos en cadena
      options.body = JSON.stringify(options.body) || false;
      if (!options.body) delete options.body; // si NO hay body en options elimina body

      // puedes usar este abort también con un boton y cacelar petición
      setTimeout(() => controller.abort(), 2000); //aborta la peticion por demora


      return fetch(endpoint, options)
         .then((res) =>
            res.ok
               ? res.json()
               : Promise.reject({
                  err: true,
                  status: res.status || "00",
                  statusText: res.statusText || "Ocurrio un Error",
               })
         )
         .catch((err) => err);
   };

   // ========================
   // ? methods
   // ========================
   const get = (url, options = {}) => customFetch(url, options);

   const post = (url, options = {}) => {
      options.method = "POST";
      return customFetch(url, options);
   };

   const put = (url, options = {}) => {
      options.method = "PUT";
      return customFetch(url, options);
   };

   const del = (url, options = {}) => {
      options.method = "DELETE";
      return customFetch(url, options);
   };

   return {
      get,
      post,
      put,
      del,
   };
};
