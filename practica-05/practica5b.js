for (let i = 1; i <= 100; i++) {
  let impresion = "";
  if (i % 3 === 0) {
    impresion += "Fizz";
  }
  if (i % 5 === 0) {
    impresion += "Buzz";
  }
  if (impresion === "") {
    impresion = i;
  }
  console.log(impresion);
}
