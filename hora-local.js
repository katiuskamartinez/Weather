export default function reloj(hora){
    setInterval(() => {
    let Hora=new Date().toLocaleTimeString()
    //console.log(Hora);
    document.querySelector(hora).innerHTML=`<h3> <i class="fas fa-sun"></i> ${Hora} <i class="fas fa-moon"></i></h3>`;
}, 1000); 
};