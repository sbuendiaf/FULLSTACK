
const numeros =[10,20,30,40,50];
//AÑADE EL ELEMENTO EN EL INDICE DEL ARRAY, EN LA POSICIÓN INDICADA
numeros[5]=60;
numeros[2]=120;

//EL .PUSH AÑADE EL VALOR AL FINAL DEL ARRAY SIN NECESIDAD DE INDICARLE POSICIÓN
numeros.push(70);
numeros.push(80,90,100);

//.UNSHIFT AÑADE AL PRINCIPIO DEL ARRAY LO QUE INDIQUEMOS
numeros.unshift(-10,-100,-30);

//METODOS PARA ELIMINAR
numeros.pop()//ELIMINA UN ELEMENTO AL FINAL

numeros.shift()//ELIMINA EL PRIMER ELEMENTO DEL ARRAY
numeros.splice(2,5)//ELIMINA VALORES DEL MEDIO DEL ARRAY EN ESTE CASO DESDE EL INDICE 2 ELIMINA 5, ELIMINANDO EL 2,3,4,5 Y 6

//UNA BUENA PRACTICA SERA CREAR UN NUEVO ARRAY Y A PARTIR DE AHI ELIMINAR LO DESEADO SIN MODIFICAR EL ORIGINAL

const nuevoArreglo = [...numeros,1540];
console.table(nuevoArreglo)

console.log("numeros:", numeros)
console.table(numeros)

const meses = ["Enero","Febrero","Marzo","Abril"]

console.log("Meses:", meses)
console.table(meses)

console.log(meses[2])

let coche = {
    precio:10000,
    marca:"hyundai",
    disponible: true
};

coche.semana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];

let {precio,marca,disponible,semana} = coche;

console.log("Precio",precio)
console.log("Marca",marca)
console.log("Disponible",disponible)
console.log("Semana",semana)


let variableA ="varA";
let variableB ="varB";
let variableC ="varC";

let ejercicio6 ={};


//CREAMOS PROPIEDADES A TRAVES/A PARTIR DE LAS VARIABLES
ejercicio6.variableA=variableA;
ejercicio6.variableB=variableB;
ejercicio6.variableC=variableC;

console.log("Ejercicio6:", ejercicio6)


let estaciones = ["verano"];

estaciones.push("otoño","invierno");
estaciones.unshift("primavera");

console.table(estaciones)

let camiseta1={
    nombre:"Adidas",
    precio:30
};
let camiseta2={
    nombre:"Nike",
    precio:50
};
let camiseta3={
    nombre:"Puma",
    precio:10
};
let camiseta4={
    nombre:"Rebook",
    precio:70
};

let carrito =[
    camiseta1,camiseta2,camiseta3,camiseta4
]
/* TAMBIEN PODREMOS CREARLO DE LA SIGUIENTE MANERA SI NO QUEREMOS DARLE UN NOMBRE A CADA UNO DE LAS VARIABLES
let carrito =[
    {
        nombre:"",
        precio:
    },
    {
        nombre:"",
        precio:
    },
    {
        nombre:"",
        precio:
    },
    {
        nombre:"",
        precio:
    },

]
*/ 

console.table(carrito)

//FOREACH ES UNA FUNCIÓN QUE RECORRE CADA ELEMENTO HACIENDO LO INDICADO ENTRE PARENTESIS...
meses.forEach(function(mes){
    console.log(mes);
})

