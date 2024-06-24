// NOTE
//  RTK Ejemplo de uso en src\proyectos\Todo-App-RTK\TodoApp.js
//  Permite el consumo de una api con customHooks de RTK Query
//  No es un middleware, es diferente a los Thunks

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({

  // The name of the API o "reducer".
  reducerPath: "todos",

  // The URL of the API.
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),

  // Endpoint creation
  endpoints: (builder) => ({

    // The name of the method that will be used to customHooks
    getTodos: builder.query({
      // The complement of the endpoint.
      query: () => "/todos",
    }),

    getTodoById: builder.query({
      // The complement of the endpoint.
      query: (todoId) => `/todos/${todoId}`,
    }),
  })

});

export const { useGetTodosQuery, useGetTodoByIdQuery } = todosApi;
