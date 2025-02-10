const frm = document.querySelector("form");
const resp1 = document.querySelector("pre");
const resp2 = document.querySelector("h3");
const numeros = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const num = frm.inNumber.value;

  if (!numeros.includes(num)) {
    numeros.push(num)
  }
  else {
    resp2.innerText = "O valor já existe no vetor"
  }
  frm.inNumber.value = "";
  resp1.innerText = numeros
})

frm.btVerificar.addEventListener("click", () => {
  const numb = numeros.sort((a, b) => a - b);

  resp1.innerText = numb
})
