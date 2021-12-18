const nombre = "Richard";
const apellido = "Allcca";

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

// console.log( nombreCompleto );

export function getSaludo(nombre = "Carlos") {
  return `Hola ${nombre}!`;
  // return "Hola " + nombre;
}

// console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );
