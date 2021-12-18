import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe("Prueba en 05-funciones.test.js", () => {
  test("debe retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser(userTest);

    // toEqual para comparación de obj
    expect(user).toEqual(userTest);
  });

  // getUsuarioActivo retorna un obj
  test("getUserActivo debe retornar un obj", () => {
    const nombre = "Richard";

    const objUsuario = {
      uid: "ABC567",
      username: nombre,
    };

    const getUserActivo = getUsuarioActivo(nombre);

    expect(getUserActivo).toEqual(objUsuario);
  });
});
