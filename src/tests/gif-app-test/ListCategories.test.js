import { shallow } from "enzyme";
import React from "react";
import { useFetchGif } from "../../hooks/useFetchGif";
import ListCategories from "../../proyectos/gif-app/gif-components/ListCategories";
jest.mock("../../hooks/useFetchGif");

describe("Pruebas en el <ListCategories/>", () => {
  const category = "one punch";
  let wrapper = shallow(<ListCategories category={category} />);

  beforeEach(() => {
    wrapper = shallow(<ListCategories category={category} />);
  });

  // ============================
  test("Debe mostrar el contenido de <ListCategories>", () => {
    useFetchGif.mockReturnValue({
      data: [],
      isPending: true,
      // error: false,
    });

    expect(wrapper).toMatchSnapshot();
  });

  // ============================
  test("Debe mostrar la data de useFetchGif", () => {
    const returnUseFetchGif = [
      {
        id: "asd",
        url: "http://localhost/loquesea",
        title: "El Contenido",
      },
    ];

    useFetchGif.mockReturnValue({
      data: returnUseFetchGif,
      isPending: false,
      // error: false,
    });
  });
});

// Notas:
// jest.mock(''): simula la llamada a ese archivo y controlar la info que este responde
// el 2° test no es posible porque envio como parametro la 'url' y el envia un 'string'
