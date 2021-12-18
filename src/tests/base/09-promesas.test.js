import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../dataTest/heroes";

describe("Pruebas con 09-promesas.js", () => {
  test("Debe retornar un héroe con Async", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });

  test("Debe retornar un error si héroe no existe", (done) => {
    const id = 10;
    getHeroeByIdAsync(id).catch((error) => {
      console.log(error);
      // eslint-disable-next-line jest/no-conditional-expect
      expect(error).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});

// Notas:
// done: en test ayuda para ejecutar promesas e indicar que termina el proceso
