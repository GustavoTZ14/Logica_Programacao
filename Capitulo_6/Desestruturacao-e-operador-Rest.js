const carros = [];

carros.push({ modelo: "Uno", preco: 12000 })
carros.push({ modelo: "Palio", preco: 25000 })

for (const carro of carros) {
  const { modelo, preco } = carro;
  console.log(`${modelo} - R$: ${preco}`)
}
