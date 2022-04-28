function validarPromesa(valor) {
  let promise = new Promise((resolve, reject) => {
    if ((valor - Math.abs(Math.round(valor))) !== 0) {
      resolve("Success");
    } else {
      reject("Error");
    }
  });
  promise.then(
    function (value) {
      displayResult(value);
    },
    function (error) {
      displayResult(error);
    }
  );
}

validarPromesa(3.5);

function displayResult(resultado) {
  console.log(resultado);
}
