const arrayOriginal = [2, 5, 6, 7, 1, 8, 9, 10];
const nuevoArray = [];

const range = (inicio, fin) => {
  if (inicio < 0 || fin > 8) {
    return "Valores no son valido dado este array";
  }
  for (let i = inicio; i <= fin; i++) {
    nuevoArray.push(arrayOriginal[i]);
  }
  return nuevoArray;
};

console.log(range(2, 5));
