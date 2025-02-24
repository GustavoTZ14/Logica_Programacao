const prompt = require("prompt-sync")();
const situacao = (nota, media) => {
  if (nota >= media) {
    console.log("Aprovado")
  }
  else {
    console.log("Reprovado")
  }
}

const prova1 = Number(prompt("Qual Nota:"))

situacao(prova1, 7);
