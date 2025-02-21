const prompt = require("prompt-sync")();
const anoAtual = new Date().getFullYear();
const idade = prompt(`Quantos anos você comemora em ${anoAtual}?`);
const anoNasc = anoAtual - idade;
console.log(`Ah... Então você nasceu em ${anoNasc}`)
