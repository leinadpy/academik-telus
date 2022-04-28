const kelvin = 273;

const celsius = kelvin - 273;

const fahrenheit = Math.round((celsius * 9) / 5 + 32);

console.log(
  `La temperatura ${kelvin} equivale a ${celsius}° Celsius y a ${fahrenheit}° Fahrenheit`
);
