import React from "react";
import styled, { ThemeProvider } from "styled-components";

export function ThemeProvide() {
  const Myh3 = styled.h3`
    padding: 2rem;
    text-align: center;
    color: ${({ color }) => color};
    color: ${({ color }) => color || "hsl(206,96%,31%)"};
    background-color: hsl(54, 63%, 51%);
  `;

  // estos obj se pasan como props en los "ThemeProvider" para ejecutarlos como funcion dentro de components como "Box"
  const light = {
    color: "#222",
    bgColor: "#DDD",
  };
  const dark = {
    color: "#DDD",
    bgColor: "#222",
  };

  // component styles normal
  // etiqueta para usar estilos generales de la props declaradas en "ThemeProvider"
  const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.bgColor};
  `;

  // COMPONENT con HERENCIA de estilos
  const BoxRounded = styled(Box)`
    border-radius: 1rem;
  `;

  return (
    <div>
      <Myh3>themeProvider genera un contexto donde sus children </Myh3>
      <ThemeProvider theme={light}>
        <Box>Soy una caja con ThemeProvider Light</Box>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>Soy una caja con ThemeProvider Dark</Box>
      </ThemeProvider>
      <ThemeProvider theme={light}>
        <BoxRounded>
          Caja con Herencia de estilos del component anterior con Theme light{" "}
        </BoxRounded>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <BoxRounded>
          Caja con Herencia de estilos del component anterior con Theme Dark{" "}
        </BoxRounded>
      </ThemeProvider>
    </div>
  );
}
