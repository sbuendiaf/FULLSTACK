//DECLARAMOS LA FUNCION
function sumar(n1,n2){//ARGUMENTO DE LA FUNCIÓN
    //CUERPO DE LA FUNCIÓN
    console.log(n1+n2);
};
//LLAMAMOS A LA FUNCIÓN
sumar(10,20);//n1=10,n2=20



function doblar(n1){
    console.log(n1*2);
};
doblar(7.35)

//EXPRESIÓN DE LA FUNCIÓN

const sumar2=function(n1,n2){
    console.log(n1+n2);
};

sumar2(4,10);

//IIFE
//SINTAXIS DIFERENTE
(function(){
    console.log("Esto es una función")
})();


/*
PRIMERO LEE CREACIÓN 
SEGUNDO LEE LLAMADAS

DIFERENCIA ENTRE MÉTODOS Y FUNCIONES

MÉTODO ES CUANDO ENCONTRAMOS . SEGUIDO DEL NOMBRE
Y UNA FUNCIÓN ENCONTRAMOS NOMBRE DE LA FUNCIÓN ()

*/

const numero1=20;
const numero2="50";

//PARSEINT CONVIERTE UN STRING EN ENTERO

console.log(parseInt(numero2));//PARSEINT() ES UNA FUNCIÓN
console.log(numero1.toString());//.TOSTRING()ES UN MÉTODO

//CONTAR NUMERO DE CARACTERES
const twit=function(n1){
    console.log("Numero caracteres", n1.length);
};
twit("buenas tardes por la manana");

//BUSQUEDA DE PALABRA EN UN TEXTO
function buscar(texto,palabra){
    console.log("Buscamos la palabra en el texto", texto.includes(palabra));
}
buscar("buenas tardes por el dia","por")


// function anadir(carrito,producto){
//     console.log("total carrito", carrito.push(producto))
// };
// anadir([1,2,3,4,5,5],9)

function ecuacionSegundo(a=0,b=0,c=0){
    console.log("resultado",(-b+Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a))
    console.log("resultado",(-b-Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a))
};
ecuacionSegundo(2,10,1);

//crear funcion que nos de numero pares entre dos numeros dados


//RETURN NOS DEVUELVE UN VALOR PERO NO LO MUESTRA
function multiplicar(n1=0,n2=0){
    return n1*n2;//me devuelve le valor

};
let resultado= multiplicar(2,5);

console.log("resultado",resultado)


function dividir(n1=0,n2=0){
    return n1/n2;
};
let resultadoDiv=dividir(9,3)

console.log("resultado division", resultadoDiv)


let total=0;

function agregarCarrito(precio){
    return total+=precio;
    //el += te actualiza la variable y te suma el precio
};

total=agregarCarrito(200);
total=agregarCarrito(500);
total=agregarCarrito(300);


let totalImp=0;

function calculoImpuesto(precioImp,impuesto){
    return totalImp+=precioImp*impuesto/100;
}
totalImp=calculoImpuesto(200,10)
totalImp=calculoImpuesto(100,21)

console.log("total impuestos", totalImp)

//REPRODUCTOR DE MUSICA

const reproductor={
    reproducir:function(id){
        console.log(`Reproduciendo:${id}`)
    },
    pausar:function(){
        console.log(`Pausando`)
    },
    crearPlaylist:function(nombre1){
        console.log(`Creando playlist: ${nombre1}`)
    }

};

reproductor.reproducir(3870);
reproductor.pausar();
reproductor.crearPlaylist("Metal");

//INTRODUCIMOS UNA FUNCION NUEVA

reproductor.borrarCancion= function(id){
        console.log(`borrando: ${id}`)   
};
reproductor.borrarCancion(3870)


function nombreCompleto(nombre,apellido1,apellido2){
    console.log(`Nombre completo: ${nombre} ${apellido1} ${apellido2}`)
    // console.log("Nombre completo",nombre+" "+apellido1+" "+apellido2)
};

nombreCompleto("Sergio","Buendia","Fernandez")



let triplicar=function(numero=1){
    console.log("VALOR DE TRIPLICAR CON EXPRESIÓN DE LA FUNCIÓN",numero*3)
};
triplicar(12)

//ARROW FUNCTION: SUSTITUIMOS FUNCTION POR => EXPLÍCITAMENTE TAMBIEN SE  PUEDE EN CASO DE UTILIZAR UN RETURN ELIMINARLO EN CASO DE SOLO HABER 1
let triplicar2=(numero=1)=>{
    console.log("VALOR DE TRIPLICAR CON EXPRESIÓN DE LA FUNCIÓN",numero*3)
};
triplicar2(13)


//Creamos un arrow function que devuelva un valor +7 y almacene en una variable resultadoAprendiendo
let aprendiendo=leccion=>{
    return leccion+7
};
let resultadoAprendiendo=aprendiendo(10);

console.log("resultado aprendiendo", resultadoAprendiendo);

let matricula=(n1,n2)=>{
    console.log(`tu matricula es:${n1}${n2}`)
};
matricula(4451,"HKX");

//condicionales carrito

// let camiseta1={
//     nombre:"Adidas",
//     precio:30
// };
// let camiseta2={
//     nombre:"Nike",
//     precio:50
// };
// let camiseta3={
//     nombre:"Puma",
//     precio:10
// };
// let camiseta4={
//     nombre:"Rebook",
//     precio:70
// };

// let carrito =[
//     camiseta1,camiseta2,camiseta3,camiseta4
// ];
// console.table(carrito);

let carrito=[
    {
        nombre:"Adidas",
        precio:30
    },
    {
        nombre:"Nike",
        precio:50
    },
    {
        nombre:"Puma",
        precio:10
    },
    {
        nombre:"Rebook",
        precio:70
    }
];
// console.table(carrito);

let resultadoCarrito=0

// resultadoCarrito=carrito.some(function(producto){
//     return producto.nombre==="Puma"
// });

// console.log("Resultado",resultadoCarrito)
resultadoCarrito=carrito.some(producto=>{
    return producto.nombre==="Puma"
});

console.log("Resultado",resultadoCarrito);

//iterar por todas las propiedades de mi array que me interesen(Recorrer)

resultadoCarrito=carrito.reduce((total,producto)=>{
    return total + producto.precio
}, 0);//el valor 0 es lo que queremos que sume al resultado
console.log("Uso reduce", resultadoCarrito);

//filter
// resultadoCarrito=carrito.filter(producto=>{
//     return producto.precio > 40
// });
resultadoCarrito=carrito.filter(producto=>producto.precio > 40);
console.log("Uso filter", resultadoCarrito)
