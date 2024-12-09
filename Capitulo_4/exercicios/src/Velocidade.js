const frm = document.querySelector("form");
const resp = document.querySelector("h2");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const veloPermitida = Number(frm.inVeloPermitida.value);
    const veloCondutor = Number(frm.inVeloCondutor.value);
    const multa = veloPermitida * (20 /100) + veloPermitida;

    if(veloCondutor < veloPermitida){
        resp.innerText = "tudo bem pode passar"
    }
    if(veloCondutor > veloPermitida && veloCondutor <= multa){
        resp.innerText = "multa leve"
    }
    if(veloCondutor > multa){
        resp.innerText = "multa grave"
    }
})