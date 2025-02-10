const frm = document.querySelector("form");
const resp = document.querySelector("pre");
const clube = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nomeClube = frm.inClube.value;

  clube.push(nomeClube);

  frm.reset();
  frm.inClube.focus();
  frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", () => {
  let lista = "";

  for (const clubes of clube) {
    lista += clubes + "\n"
  }

  resp.innerHTML = `${lista}`
})

frm.btMontar.addEventListener("click", () => {
  resp.innerHTML = "";
  let club = [];

  if (clube.length % 2 == 0) {
    let totalClubes = clube.length;
    for (let i = 0; i < Math.floor(totalClubes / 2); i++) {
      club.push(`${clube[i]} x ${clube[totalClubes - 1 - i]}\n`)
    }
  }

  club.forEach(clubes => {
    let li = document.createElement("li");
    li.textContent = clubes;
    resp.appendChild(li)
  })
})
