
let reserva ={
    nombre:"sergio",
    apellido:"buendia",
    total:15,
    pagado: true
}
console.log(reserva.nombre)
//el metodo this me permita hacer uso de todas las propiedades que esten dentro del objeto
reserva.informacion=function(){
    console.log(`El cliente ${this.nombre} reservo y la cantidad a pagar es ${this.total}`)
}
console.log(reserva.informacion())

// crear fecha y racibir cuatro propiedades, año mes dia faltante(funcion) esa funcion me dira los dias para acabar el mes

let fecha ={
    año:2023,
    mes:"Marzo",
    dia:21,
    faltante: function(){
        console.log(`Faltan ${31-this.dia}`)
    }
}
console.log(fecha.faltante())