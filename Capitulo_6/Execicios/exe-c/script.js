const frm = document.querySelector("form");
const resp = document.querySelector("pre");
const dados = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const candidato = frm.inCandidato.value;
  const numAcertos = Number(frm.inNum.value);

  const jaExiste = dados.some(item => item.candidato === candidato)

  !jaExiste ? dados.push({ candidato, numAcertos }) : alert("Já existe este nome")

  frm.btListar.dispatchEvent(new Event("click"));
  frm.inCandidato.focus();
  frm.reset()
  console.log(dados)
})

frm.btListar.addEventListener("click", () => {
  let list = "";

  for (const dado of dados) {
    list += `${dado.candidato} - ${dado.numAcertos}\n`
  }

  resp.innerText = list
})

frm.btAprovado.addEventListener("click", () =>{
  let lista = "";
  const aprovados = Number(prompt("Numero de acertos para Aprovação:"));
  dados.sort((a, b) => a.numAcertos - b.numAcertos)
  dados.reverse()

  const filtra = dados.filter(item => item.numAcertos >= aprovados);

  for(const filt of filtra){
    lista += `${filt.candidato} - ${filt.numAcertos}\n`
  }

  resp.innerText = lista
})