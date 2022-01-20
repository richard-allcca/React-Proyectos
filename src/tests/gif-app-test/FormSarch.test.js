import { shallow } from "enzyme";
import React from "react";
import FormSearch from "./../../proyectos/gif-app/gif-components/FormSearch";

describe("Prueba de Envio de formulario", () => {
  //* funcion para test normal
  // const handleAdd = (e) => {};
  const handleAdd = jest.fn();

  let wrapper = shallow(<FormSearch handleAdd={handleAdd} />);

  beforeEach(() => {
    wrapper = shallow(<FormSearch handleAdd={handleAdd} />);
    jest.clearAllMocks();
  });

  test("Debe mostrarse correctamente el componente FormSearch", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrarse correctamente valor del input", () => {
    const input = wrapper.find("input");
    const value = "Hola test mundo";

    input.simulate("change", { target: { value } });

    //? innecesario crear "p" para verificar el contenido del estado "inputValue"
    // expect(wrapper.find("p").text()).toBe(value);
  });

  test("NO Debe mostrar la info en submit del formulario", () => {
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });
    expect(handleAdd).not.toHaveBeenCalled();
  });

  test("DEBE llamar el handleAdd y limpiar la caja de texto", () => {
    const value = "Hola Mundo";

    // 1. simular el inputChange
    wrapper.find("input").simulate("change", { target: { value } });

    // 2. simular el submit
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    // 3. handleAdd se debe de haber llamado
    expect(handleAdd).toHaveBeenCalled();
    expect(handleAdd).toHaveBeenCalledTimes(1);
    //? expect(handleAdd).toHaveBeenCalledWith(expect.any(Function));

    // 4. el valor del input debe de estar ''
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});

// Notas;
// wrapper: tiene doble inicializacion fuera y dentro de beforeEach por ayuda de autocompletado
// jest.fn(): funcion que simula el submit de formulario
// beforeEach: reinicia el wrapper en caso le hagas cambios al component original
// en la simulación del formulario use un 'beforeEach' normal ln/14
// el profe uso jest.clearAllMocks(), (pero yo no necesite usarlo y paso el test)
// toHaveBeenCalled asegura que la funcion ha sido llamada (.not) niega esa validacion
// toHaveBeenCalled: verifica la llamada de la fucion
// toHaveBeenCalledTimes: verifica la llamada de la fucion (X) numero de veces
// toHaveBeenCalledWith: verifica la llamada de la fucion con un argumento funcion(no en mi caso)
