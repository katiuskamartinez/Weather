const $form=document.getElementById("form"),
$loader=document.querySelector(".loader"),
$error=document.querySelector(".error"),
$tiempo=document.getElementById("tiempo");

export default  function getData(){
    $form.addEventListener ("submit",async e=>{
        e.preventDefault();
        //console.log($form.textContent);
        try {
            $loader.style.display="block";
            //ciudad y país son atributos name de los input
            let ciudadValue=e.target.ciudad.value.toLowerCase(),
            paisValue=e.target.pais.value,
            //console.log(ciudadValue) ; 
            //variable para almacenar codigo html en formato template-string
            $datos="",
            
            url=`https://api.openweathermap.org/data/2.5/weather?q=${ciudadValue},${paisValue}&appid=a4fae39b155836fbd29442ff4b77910f&units=metric`,    
            res=await fetch(url),
            json=await res.json();
            //console.log(res);
            //console.log(json);
            if(json.message=== "city not found") {  
                $datos=`<h2>Error <mark>${json.cod}-${ciudadValue}-${json.message} </mark></h2>`;       
            }else{
                $datos=`
                <h2><i class="fas fa-city"></i>  Localidad ${json.name}-${json.sys.country} </h2><hr> 
                <h3>Temperatura de  <b> ${json.main.temp} °C </b></h3><hr>
                <h3>Minima ${json.main.temp_min} °C</h3><hr>
                <h3>Máxima ${json.main.temp_max} °C</h3><hr>
                <h3>Humedad ${json.main.humidity} %</h3><hr>
                <h3>Sensación Térmica ${json.main.feels_like} °</h3><hr>
                <h3>Velocidad del viento ${json.wind.speed} km/h.</h3><hr>`;
            } 
                $loader.style.display="none";
                $tiempo.innerHTML=$datos;   
            }catch (err) {   
                //console.log("error"); 
                let message=err.statusText || "ocurrio un error";
                $error.innerHTML=`<p>error:${err.status} ${message} </p>`;  
                $loader.style.display="none";   
            }           
    });             
} 
        

