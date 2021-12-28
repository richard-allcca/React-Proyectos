import { shallow } from "enzyme";
import Hijo from "./../../conceptos_basicos/defaultProp-typesProp/Hijo";

describe("Prueba del componente Hijo", () => {
  test("Retorna el contenido html del hijo", () => {
    const wrapper = shallow(<Hijo saludo="hola desde el hijo Richard" />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Retorna el subtitulo enviado por props", () => {
    const saludo = "test para obtener elementos del componente";
    const numero = 2;
    const subtitle = "Soy el subTitulo";

    const wrapper = shallow(
      <Hijo numero={numero} saludo={saludo} subtitle={subtitle} />
    );

    const textoParrafo = wrapper.find("p").at(0).text();

    expect(textoParrafo).toBe(saludo);
  });
});

// Notas:
// mas detalles en las notas en el "Contador.test.js"
// 1. find() actua como d.querySelector('h2) apunta a un elemento html')
// 2. text() extrae el texto del elemento seleccionado con find()
