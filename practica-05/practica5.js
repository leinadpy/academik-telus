const niveles = 7;

if (niveles < 3) {
  console.log("Lo siento, no imprimo triángulos menores a 3 niveles");
} else {
  for (let i = 1; i <= niveles; i++) {
    let linea = "";
    let primerAsterisco = true;
    for (let c = 1; c <= i; c++) {
      if (primerAsterisco) {
        for (let j = 0; j <= niveles - i; j++) {
          linea += " ";
        }
        primerAsterisco = false;
      }
      linea += "# ";
    }
    console.log(linea);
  }
}
