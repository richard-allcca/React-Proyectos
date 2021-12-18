import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe("Pruebas en destructuracion", () => {
  test("Debe retornar un string y numero", () => {
    const arr = ["ABC", 123];

    // normal
    const getArr = retornaArreglo();

    expect(getArr).toEqual(arr);

    // destructurado y typeof
    const [letras, numeros] = retornaArreglo();

    expect(letras).toBe("ABC");
    expect(typeof letras).toBe("string");

    expect(numeros).toBe(123);
    expect(typeof numeros).toBe("number");
  });
});

// Notas:
// typeof, comprueba el tipo si no conoces el contenido pero si el tipo que deberia retornar
