const carro = { modelo: "Corsa", preco: 59500 };
const carro2 = { ...carro, ano: 2020 }; // Operador Spread
console.log(carro2);

let pacientes = ["João", "Sofia"];
pacientes = ["Ana", ...pacientes];
pacientes = [...pacientes, "Maria"];
console.log(pacientes);
