import { shallow } from "enzyme";
import React from "react";
import Contador from "../../conceptos_basicos/Componentes-test/Contador";

describe("Prueba del componente contador", () => {
  let wrapper = shallow(<Contador />);

  beforeEach(() => {
    // repite esta seleccion para usarlo dentro de los test(refactoring) 
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
    // busca un elemento en una posicion y simula una accion 
    wrapper.find("button").at(1).simulate("click");

    // almacena un elemento buscado y su contenido
    const textWrapper = wrapper.find("p").text();

    // verifica el contenido del elemento
    expect(textWrapper).toBe("99");
  });

  test("debe reiniciar el contador al valor por defecto", () => {
    // const wrapper1 = shallow(<Contador valor={105} />);

    // selecciona el elemento y simula un "click"  
    wrapper.find("button").at(1).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    wrapper.find("button").at(2).simulate("click");

    // se obtiene el resultado de la simulacion 
    const counterText = wrapper.find("p").text();
    
    // se verifica el resultado de la simulacion 
    expect(counterText).toBe("100");
  });
});

// Notas:
// - comentado "wrapper" y usado de formal global en el "describe" para usarlo en todos los test
// - wrapper: para obtener el elemento html o pasarle valor para usarlo en los test
// - beforeEach reinicia el <Contador/> en cada ejecución de test
// - expect: el valor o contenido de el elemento analizado
// - toBe: el valor o contenido que se deberia tener en el expect