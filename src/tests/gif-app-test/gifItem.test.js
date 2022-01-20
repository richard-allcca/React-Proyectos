import { shallow } from "enzyme";
import React from "react";
import GifItem from "../../proyectos/gif-app/gif-components/GifItem";

describe("Prueba del componente GifItem", () => {
  let title = "titulo";
  let wrapper = shallow(<GifItem title={title} />);

  // ? esto es para reiniciar el wrapper en caso le hagas cambios al component original
  beforeEach(() => {
    wrapper = shallow(<GifItem title={title} />);
  });

  test("Retorna contenido del componente GifItem", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe retornar un title", () => {
    const h3 = wrapper.find("h3");
    expect(h3.text().trim()).toBe(title);
  });

  test("debe de tener animate__fadeIn", () => {
    const div = wrapper.find("div");
    const className = div.prop("className");

    expect(className.includes("animate__fadeIn")).toBe(true);
    //  expect(className).toContain("animate__fadeIn");
  });
});

// Notas:
//! el test al componente GifItem no se completo, aun no se resuelve el 'images.downsized_medium'
// en este test no podemos validar el contenido de 'images'
// falta mas detalles de como hacer este test para contenido de props dinamicos
