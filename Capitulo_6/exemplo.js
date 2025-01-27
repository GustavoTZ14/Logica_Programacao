const numeros = [5, 10, 15, 20];
let soma = 0;
numeros.forEach(num => soma += num); // loop método
console.log(`${soma}`);

console.log(numeros.reduce((a, b) => a + b)); // callback método de array

// Diferentes métodos resultados iguais
