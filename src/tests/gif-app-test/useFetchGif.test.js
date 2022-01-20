// import React from 'react';
// import {shallow} from "enzyme";
import { renderHook } from "@testing-library/react-hooks";
import { useFetchGif } from "./../../hooks/useFetchGif";

describe("Prueba sobre useFetchGif", () => {
  // ===============================
  test("should retornar el estado inicial", async () => {
    const url =
      // eslint-disable-next-line no-template-curly-in-string
      "http://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=iGk4Cf4Uc0afvcm6bNLr15qT3COxulwj";

    const { result, waitForNextUpdate } = renderHook(() => useFetchGif(url));
    const { data, isPending } = result.current;

    await waitForNextUpdate();

    // console.log(data, isPending);
    expect(data).toEqual(null);
    expect(isPending).toBe(true);
  });

  // ===============================
  test("Debe retornar un arreglo de imagenes y isPending en false", async () => {
    const url =
      // eslint-disable-next-line no-template-curly-in-string
      "http://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=iGk4Cf4Uc0afvcm6bNLr15qT3COxulwj";

    const { result, waitForNextUpdate } = renderHook(() => useFetchGif(url));
    await waitForNextUpdate();
    const { data, isPending } = result.current;

    // console.log(data, isPending);
    expect(data.length).toBe(10);
    expect(isPending).toBe(false);
  });
});

// Notas:
//? async: para poder ejecutar los 2 test con "waitForNextUpdate"
//? await: importante la ubicacion en cada test
