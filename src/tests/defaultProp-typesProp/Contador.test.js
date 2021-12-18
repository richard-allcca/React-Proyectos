import { shallow } from "enzyme";
import React from "react";
import Contador from "../../conceptos_basicos/Componentes-test/Contador";

describe("Prueba del componente contador", () => {
  let wrapper = shallow(<Contador />);

  beforeEach(() => {
    // se repite por que se necesita acceso a metodos
    wrapper = shallow(<Contador />);
  });

  test("Retorna el contenido html del componente Contador", () => {
    // const wrapper = shallow(<Contador />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Retorna el valor del número por defecto", () => {
    // const wrapper = shallow(<Contador />);

    const valuePorDefecto = wrapper.find("p").text();

    expect(valuePorDefecto).toBe("100");
  });

  test("Debe incrementar con el boton +1", () => {
    wrapper.find("button").at(0).simulate("click");

    const textWrapper = wrapper.find("p").text();

    expect(textWrapper).toBe("101");
  });

  test("Debe decrementar con el boton -1", () => {
    wrapper.find("button").at(1).simulate("click");

    const textWrapper = wrapper.find("p").text();
    expect(textWrapper).toBe("99");
  });

  test("debe reiniciar el contador al valor por defecto", () => {
    // const wrapper1 = shallow(<Contador valor={105} />);
    // console.log(wrapper);
    wrapper.find("button").at(1).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    wrapper.find("button").at(2).simulate("click");

    const counterText = wrapper.find("p").text();
    // console.log(reset);
    expect(counterText).toBe("100");
  });
});

// Notas:
// - comentado "wrapper" y usado de formal global en el "describe" para usarlo en todos los test
// - beforeEach reinicia el <Contador/> en cada ejecución de test
