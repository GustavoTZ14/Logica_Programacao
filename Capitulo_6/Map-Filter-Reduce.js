// Map
const num = [10, 13, 20, 8, 15];
const dobros = num.map(numero => numero * 2);
console.log(dobros.join(","));

// Filter
const pares = num.filter(nums => nums % 2 == 0);
console.log(pares.join(","));

// Reduce
const soma = num.reduce((acum, numeros) => acum + numeros, 0)
console.log(`Soma: ${soma}`);

const maior = num.reduce((a, b) => Math.max(a, b), 0);
console.log(`Maior: ${maior}`)
