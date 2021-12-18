import { getSaludo } from "../../base-pruebas/02-template-string";

describe("Pruebas en 02-template-string.js", () => {
  test("método getSaludo retorna hola Richard", () => {
    const nombre = "Richard";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre + "!");
  });

  //  El saludo debe restornar 'Hola carlos' si no hay argumento nombre
  test("método getSaludo retorna hola Carlos", () => {
    const saludo = getSaludo();

    expect(saludo).toBe(`Hola Carlos!`);
  });
});
