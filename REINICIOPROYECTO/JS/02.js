// const producto = "Juego de mesa Catan";
// const producto2 = String("Risk");
// const producto3 = new String("Uno");

// console.log("Producto:", producto);
// console.log("Producto2:", producto2);
// console.log("Producto3:", producto3);

// console.log("TYPEOF Producto:",typeof producto);
// console.log("TYPEOF Producto2:",typeof producto2);
// console.log("TYPEOF Producto3:",typeof producto3);
// .typeof nos indica que tipo de  variable

// let numero100 = 100;
// let numero200 = "200";

// console.log("NUMERO100:", numero100);
// console.log("NUMERO200:", numero200);

// console.log("NUMERO100:",typeof numero100);
// console.log("NUMERO200:", typeof numero200);

// console.log("Producto:", producto.length);
// .length nos mostrara la longitud de la variable

// console.log("mesa:", producto.indexOf("mesa"));
// .indexOf nos indica si lo que le preguntamos existe en nuestra variable y nos indica la posición.

// console.log("mesa:", producto.includes("mesa"));
// .includes nos indicara con true o false si dicho elemento se incluye en la variable.

let numero1 = 100;
let numero2 = 200.25;
let numero3 = "200";
let numero4 = 2/3;

console.log("numero1:", numero1);
console.log("numero2:", numero2);
console.log("numero3:", numero3);
console.log("numero4:", numero4);

console.log("numero1:",numero1, typeof numero1);
console.log("numero2:",numero2, typeof numero2);
console.log("numero3:",numero3, typeof numero3);
console.log("numero4:",numero4, typeof numero4);

let numero5 = numero1+numero2;
let numero6 = numero3+numero4;

console.log("suma:", numero5)
console.log("suma:", numero6)


let resultado10 = Math.random();

console.log("Random:", resultado10);

let resultado2 = Math.floor(Math.random()*30);

console.log("Random:", resultado2);

let diametro = 20;

let area = Math.PI * Math.pow((diametro/2), 2);

console.log("Area:", area);
console.log("Area redondeada:",Math.round(area));

let aleatorio2 = Math.random()+2;

console.log("aleatorio2:", aleatorio2);

let dado = Math.trunc( 1+ Math.random()*5);

console.log("dado:", dado);

let prenda1 = 120;
let prenda2 = 85;
let prenda3 = 24;

let cuenta = prenda1 + prenda2 + prenda3;
let cdescuento = cuenta - (cuenta*0.4);

console.log("Cuenta total:", cdescuento);

let meGusta = 0;
// meGusta++;

console.log("uso de incrementos", meGusta+=15);
console.log("uso de incrementos", meGusta);

let nombre = "Sergio";
let email = "sbuendiaf@gmail.com";

console.log("Nombre:", nombre);
console.log("Email:", email);
console.log("Nombre y Email:", nombre+ " " +email);
console.log(`Nombre Cliente: ${nombre} Email: ${email}`);//ESTAMOS UTILIZANDO UN TEMPLATELITERAL QUE ENTRE OTRAS COSAS SIRVE PARA CONCATENAR, PRINCIPAL MENTE SIRVE PARA MEZCLAR TEXTO CON VARIABLES Y FUNCIONES

let boolean1 = true
let boolean2 = false
let boolean3 = "true"

console.log("tipo de boolenaos:",typeof boolean1);
console.log("tipo de boolenaos:", typeof boolean2);
console.log("tipo de boolenaos:",typeof boolean3);

