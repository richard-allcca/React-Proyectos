import React from "react";
import styled, { ThemeProvider } from "styled-components";

const Myh3 = styled.h3`
  padding: 2rem;
  text-align: center;
  color: ${({ color }) => color};
  color: ${({ color }) => color || "hsl(206,96%,31%)"};
  background-color: hsl(54, 63%, 51%);
`;

const light = {
  color: "#222",
  bgColor: "#DDD",
};
const dark = {
  color: "#DDD",
  bgColor: "#222",
};

// component styles simple
const Box = styled.div`
  padding: 1rem;
  margin: 1rem;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.bgColor};
`;

// herencia
const BoxRounded = styled(Box)`
  border-radius: 1rem;
`;

export function CustomThemeProvide() {
  return (
    <div>
      <Myh3>Ejemplo de uso con ThemeProviders</Myh3>
      <ThemeProvider theme={light}>
        <Box>Soy una caja con ThemeProvider Light</Box>
      </ThemeProvider>

      <ThemeProvider theme={dark}>
        {/* <Box>Soy una caja con ThemeProvider Dark</Box> */}
        <BoxRounded>
          Caja con Herencia de estilos del component anterior con Theme light{" "}
        </BoxRounded>
      </ThemeProvider>
    </div>
  );
}
// Notas:
// ThemeProvider: utiliza props para dar estilos a todos los elementos en su interior
// styled(nameStyles): BoxRounded hereda de box ln/23
