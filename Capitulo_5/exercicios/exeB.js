const prompt = require("prompt-sync")();
let numChinchilas = Number(prompt("Nª Chinchilas:"))
const numAno = Number(prompt("Nª Anos:"))

console.log(`1º Ano: ${numChinchilas} Chinchilas`)

for (let i = 2; i <= numAno; i++) {
  numChinchilas *= 3;
  console.log(`${i}º Ano: ${numChinchilas} Chinchilas`)
}
