
"use strict";
// let nombreProducto = "sudadera";
// let precio = 25;
// let disponible = true;

// console.log("Nombre producto:", nombreProducto);
// console.log("Precio:", precio);
// console.log("Disponibilidad:", disponible);

let producto = {
    nombreProducto: "Adidas",
    precio: 25,
    disponible: true,
    categoria:"sport"
}

console.log(`Mi primer template: ${producto}`, producto)
console.log("Nombre producto:", producto);

console.log("Uso de sintaxis de punto", producto.precio);
console.log(`usos de punto en template string: ${producto.precio}`);

producto.imagen = "imagen.jpg";


console.log(`Mi primer template: ${producto}`, producto)
console.log("Nombre producto:", producto);

producto.borrar = true;

console.log("Borrar", producto);

delete producto.borrar;

console.log("Delete Borrar:", producto);

const precioProducto = producto.precio;

console.log("Precio producto:", precioProducto);

let nombre = producto.nombreProducto;

console.log("Nombre producto:", nombre);

const {categoria} = producto;

console.log("Categoria:", categoria);

Object.freeze(producto);

console.log("Esta congelado:",Object.isFrozen (producto));

let medidas = {
    peso:90,
    alto:150,
    ancho: 60,
    profundidad:100,
};

Object.seal(medidas);

medidas.profundidad = 85;

console.log("medidas modificadas:", medidas);

//spread/rest operator
let nuevoProducto = {...producto,...medidas};

console.log("Nuevo producto:", nuevoProducto)


