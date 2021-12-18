import { shallow } from "enzyme";
import React from "react";
// import { render } from "@testing-library/react";
import Padre from "../../conceptos_basicos/defaultProp-typesProp/Padre";

describe("Pruebas en  <Padre/>", () => {
  // ? testing con jest (render)
  // test("debe mostrar el mensaje Hola, Richard requerido!", () => {
  // const saludo = "hola, Richard requerido!";
  //=> sin destructurar
  // const wrapper = render(<Padre />);
  // wrapper.getByText()

  // => destructurado 'getByText'
  // const { getByText } = render(<Padre />);
  // expect(getByText(saludo)).toBeInTheDocument();
  // });

  // ? testing con enzyme (shallow)
  test("debe mostrar <Padre/> correctamente", () => {
    const wrapper = shallow(<Padre />);

    expect(wrapper).toMatchSnapshot();
  });
});

// Notas:
// toBeInTheDocument: valida que saludo existe en el document
