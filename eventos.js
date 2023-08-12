const caja = document.getElementById("caja")
const boton = document.getElementById("boton")

if(caja){
caja.addEventListener("click",alerta)
}

if(boton){
boton.addEventListener("click",function hola(e){
   e.stopPropagation();
   alert("Hola!!")
})};

function alerta(e) {
 alert("Hola! Soy el div");
 e.stopPropagation();
}







