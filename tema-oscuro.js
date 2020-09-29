
//la función recibe dos parametros,el btn y la class css para tema oscuro
export default function temaOscuro(btn,classModo){
    const $temaBtn=document.querySelector(btn),
    //selectores para capturar el atributo del HTML data-dark///
    $selectores=document.querySelectorAll("[data-dark]");
    //console.log($selectores);
    let luna="🌙",
    sol="☀️";

    document.addEventListener("click",(e)=>{
        if(e.target.matches(btn)){
            //console.log($temaBtn.textContent);
            if($temaBtn.textContent===luna){
            $selectores.forEach((el)=>el.classList.add(classModo));
            $temaBtn.textContent=sol;
            }else{
            $selectores.forEach((el)=>el.classList.remove(classModo));
            $temaBtn.textContent=luna; 
            }
        }
    })
}