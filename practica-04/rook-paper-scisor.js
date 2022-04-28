// piedra gana a tijeras
// papel gana a piedra
// tijeras gana a papel
// piedra = 0, papel = 1, tijeras = 2

const jugador = 1;
const computadora = Math.floor(Math.random() * 3);

const ganador = () => {
  if (jugador === 0) {
    switch (computadora) {
      case 0:
        return "Un empate";
      case 1:
        return "La computadora gana";
      default:
        return "El jugador gana";
    }
  } else if (jugador === 1) {
    switch (computadora) {
      case 0:
        return "El jugador gana";
      case 1:
        return "Un empate";
      default:
        return "La computadora gana";
    }
  } else {
    switch (computadora) {
      case 0:
        return "La computadora gana";
      case 1:
        return "El jugador gana";
      default:
        return "Un empate";
    }
  }
};

const eleccion = (valor) => {
  switch (valor) {
    case 0:
      return "piedra";
    case 1:
      return "papel";
    default:
      return "tijeras";
  }
};

console.log(
  `El jugador eligió ${eleccion(jugador)} y la computadora eligió ${eleccion(
    computadora
  )}. El resultado es: ${ganador()}`
);
