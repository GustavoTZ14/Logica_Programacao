const prompt = require("prompt-sync")();
const anuncio = prompt("Anuncio:");
let numPalavras = 0;
const tam = anuncio.length;

for (let i = 0; i < tam; i++) {
  if (anuncio.charAt(i) == "") {
    numPalavras++
  }
}

console.log(`Anúncio: ${anuncio}\nNº Palavras: ${numPalavras + 1}`)
