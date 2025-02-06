const nomes = ["Pedro", "Ana", "João"];
nomes.sort();
console.log(nomes.join(","));
nomes.reverse();
console.log(nomes.join(","));

const numeros = [50, 100, 2];
numeros.sort();
console.log(numeros.join(","));
numeros.sort((a, b) => a - b);
console.log(numeros.join(","))
numeros.reverse();
console.log(numeros.join(","))
