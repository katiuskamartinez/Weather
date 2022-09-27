export default function reloj(hora) {
  setInterval(() => {
    let Hora = new Date().toLocaleTimeString();
    //console.log(Hora);
    document.querySelector(hora).innerHTML = `<h3>  ${Hora} </h3>`;
  }, 1000);
}
