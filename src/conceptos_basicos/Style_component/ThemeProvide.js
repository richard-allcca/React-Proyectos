import styled, { ThemeProvider } from "styled-components";

const Myh3 = styled.h3`
    padding: 2rem;
    text-align: center;
    color: ${({ color }) => color};
    color: ${({ color }) => color || "hsl(206,96%,31%)"};
    background-color: hsl(54, 63%, 51%);
  `;

const light = { // los valores de estilos por tema son Objetos
  color: "#222",
  bgColor: "#DDD",
};
const dark = {
  color: "#DDD",
  bgColor: "#222",
};

// ==============================================================
// Component que recibe los estilos segun el tema
// ==============================================================
const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.bgColor};
    `;

// ==============================================================
// HERENCIA de estilos
// ==============================================================
const BoxRounded = styled(Box)`
    border-radius: 1rem;
  `;

export function ThemeProvide() {

  return (
    <div>
      <Myh3>themeProvider genera un contexto para sus children </Myh3>
      <ThemeProvider theme={ light }>
        <Box>Soy una caja con ThemeProvider Light</Box>
      </ThemeProvider>
      <ThemeProvider theme={ dark }>
        <Box>Soy una caja con ThemeProvider Dark</Box>
      </ThemeProvider>
      <ThemeProvider theme={ light }>
        <BoxRounded>
          Caja con Herencia de estilos del component anterior con Theme light{ " " }
        </BoxRounded>
      </ThemeProvider>
      <ThemeProvider theme={ dark }>
        <BoxRounded>
          Caja con Herencia de estilos del component anterior con Theme Dark{ " " }
        </BoxRounded>
      </ThemeProvider>
    </div>
  );
}
