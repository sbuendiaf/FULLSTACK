
//programacion orientada a objetos
//object constructor, dinamico
// sintacsis muy parecida a una funcion , creamos una clase que es un contenedor de datos
//objetivo crear objetos de manera mas dinamica

function ProductoClase(nombre,precio){
    this.nombreObjeto=nombre;
    this.precioObjeto=precio;
}

//prototipe son metodos que me permitan crear funciones dentro de un objeto pero solo se puede utilizar dentro de este objeto

ProductoClase.prototype.formatearProducto=function(){
    console.log(`El producto ${this.nombreObjeto} tiene un precio ${this.precioObjeto}`)
}

//creamos una instancia
let producto2=new ProductoClase("monitor curvo",800);
let producto3=new ProductoClase("PC",500);
let producto4=new ProductoClase("reloj",200);


console.log(producto2.formatearProducto())
console.log(producto3)
console.log(producto4)





//crear un objeo fecha con año mes y dia
function Fecha(a, m, d){
    this.año=a;
    this.mes=m;
    this.dia=d;
}
let fecha1=new Fecha(2015,5,15)
let fecha2=new Fecha(2025,7,15)
let fecha3=new Fecha(2010,1,15)
let fecha4=new Fecha(2023,11,15)

console.log(fecha1)
console.log(fecha2)
console.log(fecha3)
console.log(fecha4)


//crear clases con la palabra reservada class
//CONSTRUCTO: FUNCION ESPECIAL QUE SE USA DENTRO DE LAS CLASES PARA GENERARME LOS OBJETOS

class ProductoClase2{
    constructor (nombre, precio){
        this.nombre=nombre;
        this.precio=precio;
    }
    formatearProducto2(){
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`)
    }
}
let producto5 = new ProductoClase2("play",500)
let producto6 = new ProductoClase2("coche",25000)

console.log(producto5)
console.log(producto5.formatearProducto2())


//crear un constructor de objeto llamado Libro, propiedades nombre precio y SBN y generar una instancia

class Libro{
    constructor(nombre, precio, ISBN){
    this.Nombre=nombre;
    this.Precio=precio;
    this.ISBN=ISBN;    
    }
}
let elPrincipito = new Libro("El principito", 15, 768390)

console.log(elPrincipito)

//HERENCIA, para copiar propiedades de una clase a otra

class Categoria extends Libro{
    constructor(nombre, precio, ISBN, categoria){
        super(nombre, precio, ISBN);//decimos que parámetros queremos copiar del anterior clase
        this.categoria=categoria;
    }
    formatearProducto3(){
        console.log(`El producto ${this.Nombre} pertenece a la categoria ${this.categoria}`)
    }
}
let laCatedral = new Categoria("La catedral", 25, 9834765, "Historia");
console.log(laCatedral);
console.log(laCatedral.formatearProducto3());