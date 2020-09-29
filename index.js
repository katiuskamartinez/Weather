import getData from "./api-weather.js";
import reloj from "./hora-local.js";
import temaOscuro from "./tema-oscuro.js";

document.addEventListener("DOMContentLoaded",e=>{
    reloj("#hora");
    temaOscuro(".tema-oscuro-btn","modo-oscuro");
    getData();
});