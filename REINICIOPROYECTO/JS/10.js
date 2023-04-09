
//FETCH API
// nos permite acceder al servidor
// utilizaremos nombre.json: es un lenguaje de transporte de datos

function obtenerEmpleados() {
    fetch("empleado.json")//accedemos a nuestro archivo de base de datos
        .then(resultado => {
            return resultado.json()
        })
        .then(datos => {
            console.log(datos);
            let { empleados } = datos;//destructuring
            empleados.forEach(empleado => {//recorremos el array empleados y mostramos solo nombre
                console.log(empleado.nombre)
            });
        });
}

obtenerEmpleados()

async function obtenerEmpleados2(){
    const resultado = await fetch ("empleado.json");

    const datos =await resultado.json();

    console.log(datos)
}
obtenerEmpleados2()