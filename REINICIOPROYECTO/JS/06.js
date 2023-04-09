
const puntaje = 1000;
if (puntaje === 1000) {
    console.log("Puntaje Correcto")
}
else {
    console.log("Puntaje Incorrecto")
};
//Cajero
let n1 = 1234;
let n2 = 34;
function cajero(contr, saldo) {
    if (contr === 1234) {
        console.log("Pin correcto")
        if (saldo <= 49) {
            console.log("Saldo correcto")
        } else {
            console.log("Saldo insuficiente")
        }
    } else {
        console.log("Pin incorrecto")
    }
}
cajero(n1, n2)

//ELSE IF ES UN NO PEOR SI
let rol = "Editor";

if (rol === "Administrador") {
    console.log("acceso a todo el sistema")
} else if (rol === "Editor") {
    console.log("acceso solo edición")
} else {
    console.log("no tienes acceso")
}

let metodoPago = "Tarjeta"

switch (metodoPago) {
    case "Tarjeta": console.log("Pagaste con tarjeta");
        break;
    case "Efectivo": console.log("Pagaste con efectivo");
        break;
    case "Bizum": console.log("Pagaste con Bizum");
        break;
    default: console.log("Pendiente de pago")
        break;

};

//ejercicio

let ejercicio10 = (n1, n2) => {
    console.log("Resultado:", (n1 + n2) * 10)
};
ejercicio10(10, 5);

//ejercicio 2 dado un parametro string nos dice el numero de caracteres que tienen la suma de los caractreres que tienen

let ejercicio2 = (n1, n2) => {
    console.log("Suma caracteres:", (n1.length) + (n2.length))
}
ejercicio2("casa", "coches")
//ejercicio4 crear estructura de control que compare si un numero al multiplicarlo por si mismo es menor que 100 y muestre que es menor si es 
let numeroDado = 11;

if ((numeroDado * numeroDado) < 100) {
    console.log("menor que 100")
} else if ((numeroDado * numeroDado) > 100 && (numeroDado * numeroDado) < 200) {
    console.log("entre 100 y 200")
} else {
    console.log("no esta entre ellos")
};

//ejercicio5 estructura de control en la cual un numero sumado por 10 nos indique si es 9,12, 15, 100

let n5 = 89;

switch (n5 + 10) {
    case 9: console.log("es 9");
        break;
    case 12: console.log("es 12");
        break;
    case 15: console.log("es 15");
        break;
    case 100: console.log("es 100");
        break;
    default: console.log("no es ninguno");
}


//FOR LOOP VA HA ESTAR EJECUTÁNDOSE EL CÓDIGO HASTA QUE SE DEJE DE CUMPLIR O SE CUMPLA UNA CONDICIÓN DETERMINADA

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
//i es un indice y le indicamos un valor inicial, i++ es un actualizador que se inicia una vez acabado la pasada
for (let i = 1; i <= 5; i++) {
    console.log(i)
};
//-=nos restara lo que le indiquemos
for (let i = 100; i >= 0; i -= 5) {
    console.log(i)
};

for (let i = 0; i <= 20 && i % 2 === 0; i++) {
    console.log(i)
};

let carrito = [
    {
        nombre: "Adidas",
        precio: 30
    },
    {
        nombre: "Nike",
        precio: 50
    },
    {
        nombre: "Puma",
        precio: 10
    },
    {
        nombre: "Rebook",
        precio: 70
    }
];

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
    console.log(carrito[i].nombre)
}

//while es similar al for, se ejecuta el código mientras la condición se cumpla
let i = 0;//indice
while (i < 10) {
    console.log(i);
    i++;//actualizador
};
//se ejecuta hasta que se cumpla la condición
let j = 4
do {
    console.log(j);
    j++
} while (j < 10);

//estructura de control con while

let ej8 = 1
while (ej8 <= 20) {
    if (ej8 % 2 === 0) { console.log("ejercicio8:", ej8) }
    ej8++
};

//ejercicio9 crear función que dado un argumento me diga si el numero es positivo negativo o 0

function ej9(n1) {
    if (n1 > 0) {
        console.log("mayor que 0")
    } else if (n1 < 0) {
        console.log("menor que 0")
    } else {
        console.log("igual que 0")
    }
};
ej9(5);

//crear una funcion que dado un argumento n entero, me haga la regresión hasta llegar a 0

function ej10(n1) {
    while (n1 >= 0) {
        console.log("cuenta regresiva", n1)
        n1--
    };
};
ej10(10);

//crear una función que dado un argumento de entrada n me de la suma de todos los numero entre 0 y n

let resultado11 = 0

function ej11(n1) {
    while (n1 >= 1) {
        resultado11 = n1 + resultado11;
        n1--
    }
    console.log("resultado suma", resultado11)
}
ej11(10);


// function ej12(n1) {
//     for (let i = 0; i <= n1; i++) {
//         console.log("suma", (n1 + i))
//     }
// }

// crear una función con while que dado un argumento me muestre una regresión del numero entre 10


function ej13(n1) {
    while (n1 >= 1) {
        console.log("division", n1)
        n1 = n1 / 10
    }
}
ej13(1000000)

//una funcion que dado un argumento me calcule la media de la suma de todos los valores

// let resultado14 = 0

// function ej14(n1) {
//     n2=n1
//     while (n1 >= 1) {
//         resultado14 += n1;
//         n1--
//     }
//     console.log("resultado", (resultado14/n2))
// }
// ej14(10)
let resultado14 = 0;
let contador = 0;

function ej14(n1) {
    while (n1 > 0) {
        resultado14 += n1;
        n1--;
        contador++;
    };
    console.log("resultado", (resultado14 / contador));
};
ej14(10);

//crear una funcion con 2 argumentos solo muestre los impares incluidos ellos y la suma de los impares


let resultado15 = 0;
function ejercicio15(n1, n2) {
    while (n1 <= n2) {
        if (n1 % 2 === 1) {
            resultado15 += n1;
            console.log(n1)
        };
        n1++;
    }; console.log("Suma total", resultado15);
};
ejercicio15(1, 8);

//crear una funcion que dada tres nots de un examen el alumno este acto o no
//media suma entre todas las notas entre el numero de notas
//4.01 apto


function notas(nota1, nota2, nota3) {
    if (((nota1 + nota2 + nota3) / 3) >= 4.01) {
        console.log("aprobado")
    } else { console.log("suspenso") }
}
notas(6, 2, 8)

//crear una funcion inducido un mes me diga si tienes 28, 30 o 31 dias

// let meses = [
//     {
//         nombre: "Enero",
//         dias: 30
//     },
//     {
//         nombre: "Febrero",
//         dias: 28
//     },
//     {
//         nombre: "Marzo",
//         dias: 31
//     },
//     {
//         nombre: "Abril",
//         dias: 30
//     }
// ];
// function mes(n1) {
//     if (meses.includes(n1)) {
//         console.log("meses.dias")
//     } else { console.log("no encontrado") }
// }
// mes("Enero")

// carrito.forEach(function(producto) {
//     console.log(producto, producto.nombre)
// })

carrito.forEach((producto)=>{
    console.log(producto,producto.nombre)
})

//map crear nuevos array, me recorren el array

let arrayMap = carrito.map(producto=>producto.nombre)

console.log(arrayMap)