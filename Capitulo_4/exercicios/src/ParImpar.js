const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const num = Number(frm.inNumero.value);

  const calc = num % 2;

  calc == 0 ? resp.innerText = `${num} é par` : resp.innerText = `${num} é impar`
})
