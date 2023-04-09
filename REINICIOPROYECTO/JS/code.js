/*Los gametos masculinos o espermatozoides en humanos y otros mamíferos son heterogaméticos y contienen uno de dos tipos de cromosomas sexuales. Son X o Y. Sin embargo, los gametos u óvulos femeninos contienen solo el cromosoma sexual X y son homogaméticos.

El espermatozoide determina el sexo de un individuo en este caso. Si un espermatozoide que contiene un cromosoma X fertiliza un óvulo, el cigoto resultante será XX o femenino. Si el espermatozoide contiene un cromosoma Y, entonces el cigoto resultante será XY o masculino.

Determine si el sexo de la descendencia será masculino o femenino según el cromosoma X o Y presente en el esperma del macho.

Si el espermatozoide contiene el cromosoma X, devuelve "¡Felicitaciones! Vas a tener una hija."; Si el espermatozoide contiene el cromosoma Y, devuelve "¡Felicitaciones! Vas a tener un hijo."; */

function genero(n1){
    if(n1=="Y"){
        console.log("¡Felicitaciones! Vas a tener un hijo.")
    }if(n1=="X"){
        console.log("¡Felicitaciones! Vas a tener una hija.")
    }
}
genero("X")

/* Este kata consiste en multiplicar un número dado por ocho si es un número par y por nueve en caso contrario. */

function numero(n1){
    if(n1%2===0){
        console.log(n1*8)
    }if(n1%2===1){
        console.log(n1*9)
    }
}
numero(7)

/*Tu tarea es encontrar el número cuadrado más cercano, nearest_sq(n)o nearestSq(n), de un entero positivo n.

Por ejemplo, si n = 111, entonces nearest\_sq(n)( nearestSq(n)) es igual a 121, ya que 111 está más cerca de 121, el cuadrado de 11, que de 100, el cuadrado de 10.

Si nya es el cuadrado perfecto (p. ej n = 144., n = 81, etc.), solo debe devolver n.

Buena suerte */

function nearest_sq(n){
    console.log( Math.pow((Math.round(Math.sqrt(n))),2))
}
nearest_sq(144)

/*Al llegar a una entrevista, se le presenta un cubo azul sólido. Luego, el cubo se sumerge en pintura roja, cubriendo toda la superficie del cubo. Luego, el entrevistador procede a cortar el cubo en las tres dimensiones un cierto número de veces.

Tu función toma como parámetro el número de veces que se ha cortado el cubo. Debe devolver la cantidad de cubos más pequeños creados por los cortes que tienen al menos una cara roja. */

//function countSquares(n){
//    console.log( (6*n*n)+2 )
//}

function countSquares(n){
    console.log( (((n+1)**2)*2)+((n**2)*2)+(((n-1)**2)*2)-2)
}
countSquares(23)