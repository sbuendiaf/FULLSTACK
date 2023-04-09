//veremos como actúa javascript en el dom, como seleccionar elementos del html

//la interacción

//como seleccionar código html, 3 formas
//querySelector: me retorna 1 o ningún elemento
//se selecciona igual que en css con . o #

let heading = document.querySelector("h1");// seleccionamos 1 o ningún elemento
console.log(heading);
let notificacion= document.querySelector("#boton");// seleccionamos 1 o ningún elemento
console.log(notificacion);

// heading.textContent = "Nuevo Titulo"

//para añadir y eliminar clases hacemos uso de .classlist

heading.classList.add("NuevaClaseJs")

let enlacesJS2 = document.querySelectorAll("A")
console.log (enlacesJS2)
console.log (enlacesJS2[0])
enlacesJS2[0].href="http://google.com"

// enlacesJS2[1].href="http://facebook.com"
// enlacesJS2[1].textContent="facebook"

// como generar elementos/codigo html desde javaScrip

let nuevoEnlace=document.createElement("A");//nos permite crear codigo html

nuevoEnlace.href="#"
nuevoEnlace.textContent="Nuevo enlace"
nuevoEnlace.classList.add("btn","botoninf", "botoninfradius", "listainf","menusec","margind25");

console.log(nuevoEnlace)

let enlacesJS3 = document.querySelector(".derecha2")
enlacesJS3.appendChild(nuevoEnlace)


//

let pozueloCont=document.createElement("DIV");//nos permite crear codigo html

pozueloCont.classList.add("selector","Selector2")

let ubicaciones= document.querySelector(".ubicaciones")
ubicaciones.appendChild(pozueloCont)

let pozuelo=document.createElement("A");

pozuelo.href="#"
pozuelo.textContent="POZUELO"

let pozueloCurso=document.querySelector(".Selector2")
pozueloCurso.appendChild(pozuelo)

//eventos

console.log(1);
//window esta por encima de document
window.addEventListener("load", function(){//añadimos eventos con addventlistener
    //Primero le decimos que tipo de evento vamos a tener, load click, scroll
    //despues llamamos al callback, tambien puenden ser funciones a parte
    //espera que cargue la pagina para darme la respuesta
    console.log(2);
})

console.log(3);
console.log(4);

//Evento scroll

window.addEventListener("scroll",function(){
    console.log("Scrolling....")
})

let botonNotificaciones=document.querySelector("#boton")
botonNotificaciones.addEventListener("click",function(evento){

})

//evento con el teclado

let nombre=document.querySelector("#Nombre")

nombre.addEventListener("change", function(){
    console.log("Escribiendo nombre...")
})
nombre.addEventListener("input", function(evento){
    console.log("Escribiendo Nombre....")
    console.log(evento)
    console.log(evento.target.value)
})

//submit son asociados a formulario
//click para otros botones
let formulario=document.querySelector("form")

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();//hace que no se nos suba la pagina al enviar el formulario
    console.log("Enviando Formulario....")
})
