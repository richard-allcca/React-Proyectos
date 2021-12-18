import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../dataTest/heroes";

describe("Prueba en funciones de Heroes", () => {
  test("retorna un heroe por id", () => {
    const id = 1;
    const getHeroId = getHeroeById(id);

    const heroData = heroes.find((h) => h.id === id);

    expect(getHeroId).toEqual(heroData);
  });

  test("retorna un undefine si Héroe no existe", () => {
    const id = 10;
    const getHeroId = getHeroeById(id);

    // udefine es un primitvo por eso podemos usar "toBe" para el test
    expect(getHeroId).toBe(undefined);
  });

  test("retorna un arreglo con los heroes DC", () => {
    const ownerDc = "DC";

    const ownerArr = heroes.filter((h) => h.owner === ownerDc);

    const heroByOwner = getHeroesByOwner(ownerDc);

    // compara los 2 arreglos
    expect(heroByOwner).toEqual(ownerArr);
  });

  test("retorna la cantidad de heroes marvel", () => {
    const ownerMarvel = "Marvel";
    const length = 2;

    const lengthHero = getHeroesByOwner(ownerMarvel);

    expect(lengthHero.length).toBe(length);
  });
});
