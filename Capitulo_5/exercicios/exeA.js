const prompt = require("prompt-sync")();
const name = prompt("Nome da Fruta:");
const repete = Number(prompt("Numero de Repetições:"));

for (let i = 1; i < repete; i++) {
  console.log(`${i} - ${name}*`)
}

console.log(`${repete} - ${name}`)
