import { getImagen } from "../../base-pruebas/11-async-await";

describe("Prueba de Función Async con Await", () => {
  test("Retorna una url de la imagen", async () => {
    const getUrl = await getImagen();

    // expect(typeof getUrl).toBe("string");
    expect(getUrl.includes("https://")).toBe(true);
  });
});

// Notas:
// done, no fue necesario aun falta probar metodos de test con async
// ln 7 comentado porque no detecta el error con el url en string
