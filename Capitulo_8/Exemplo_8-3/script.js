const calcularMedia = (...notas) => {
  const num = notas.length
  if (num == 0) {
    console.log("Informe, no mínimo, uma nota")
    return
  }

  let soma = 0;
  for (const nota of notas) {
    soma += nota
  }

  const media = soma / num;
  console.log(`Média: ${media.toFixed(1)}`)
}
calcularMedia(6, 7, 8);
calcularMedia(2, 10);
calcularMedia(7.5, 10, 8, 9.5);
calcularMedia();
