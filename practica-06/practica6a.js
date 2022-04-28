const arrayOriginal = [2, 5, 6, 7, 1, 8, 9, 10];

let minimo = arrayOriginal[0];
const nuevoArray = [];

arrayOriginal.forEach((val) => {
  if (val < minimo) {
    minimo = val;
  }
});

arrayOriginal.forEach((val) => {
  if (minimo !== val) {
    nuevoArray.push(val);
  }
});

console.log(nuevoArray);
