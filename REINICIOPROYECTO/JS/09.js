let numero1=20
let numero3=40

// console.log(numero1)
// console.log(numero2)
// console.log(numero3)

console.log(numero1)
try{
    console.log(numero2)
}catch{
    console.log("Error")
}
console.log(numero3)

//promesas, refleja un valor que estará ahora en un futuro o nunca

let usuarioAutentificado = new Promise ((resolve,reject)=>{
    let auth = false;
    if (auth){
        resolve("Usuario Autentificado");
    }else{
        reject("No se pudo iniciar sesión");
    }
});
console.log(usuarioAutentificado);

//pending: el promise no se ha cumplido pero tampoco se ga rechazado, esta en estera
//fulfiller: el promise se cumplió
//reject: se rechazo o no se cumplió

// then y catch son como if y else pero de las promesas

usuarioAutentificado
    .then(resultado => console.log(resultado))
    .catch(resultado => console.log(resultado))

//NOTIFICACIONES APPY:
//document nos permite acceder al documento html
//querySelector nos permite seleccionar un elemento
let boton = document.querySelector("#boton");

//agregar evento, addEventListener

boton.addEventListener("click",()=>{
    console.log("diste click")
    Notification.requestPermission()//es una promesa
    .then(resultado => console.log(`El resultado es ${resultado}`))
})

if(Notification.permission=="granted"){
    new Notification("esta es una nueva notificación",{
        icon: "../img/Curso-programacion-web-full-stack-centro.png",
        body: "notificación tu carrera digital"
    })
}
//ASYNC/AWAIT esperan a que se ejecute un código para iniciarse

//setTimeout: espera un determinado tiempo para que se ejecute el código

setTimeout(()=>{
    console.log("Set time out actuando")
}, 3000);//esta medida de tiempo es en milisegundos

// setInterval(()=>{
//     console.log("Set interval actuando")
// }, 4000);

//función asíncrona

//creamos una función que nos va a descargar nuestros clientes de la base de datos, en este caso solo contemplamos en caso de éxito

function descargarNuevosClientes(){
    return new Promise(resolve=>{
        console.log("Descargando clientes..... espere....")

        setTimeout(()=>{
            resolve("Los clientes fueron descargados")
        },5000);
    });
};

//Hemos creado un promise, como hacemos uso del ASYNC/AWAIT

async function app(){
    let resultadoAsync = await descargarNuevosClientes();//con AWAIT estamos indicando que no se ejecute hasta finalizar descargarNuevosClientes
    console.log(resultadoAsync)
};
app();

//Preparar una funcion que me descargue los pedidos, de respuesta a los 3seg que han sido descargados

function descargarPedidos(){
    return new Promise(resolve=>{
        console.log("Descargando pedidos.....espero....")

        setTimeout(()=>{
            console.log("Los pedidos han sido descargados")
        },3000);
    });
};

// async function pedidos(){
//     let resultadoPedidos = await descargarPedidos();
//     console.log(resultadoPedidos)
// };
descargarPedidos()

