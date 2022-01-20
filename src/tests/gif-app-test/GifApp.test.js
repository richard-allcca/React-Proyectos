import { shallow } from "enzyme";
import React from "react";
import GifApp from "./../../../../curso-react-resumen/src/proyectos/gif-app/GifApp";

describe("Prueba sobre el <GifApp/>", () => {
  let wrapper = shallow(<GifApp />);

  beforeEach(() => {
    wrapper = shallow(<GifApp />);
  });

  test("Should mostrar el contenido del componente <GifApp/>", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
