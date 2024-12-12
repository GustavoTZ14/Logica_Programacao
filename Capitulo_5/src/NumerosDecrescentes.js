const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const num = Number(frm.inNumeros.value);

    let resposta = `Entre ${num} e 1: `

    for(let i = num; i > 0; i--){
        i == 1 ? resposta += i + "." : resposta += i + ", "
    }

    resp.innerText = resposta;
})