// EJERCICIOS
/*
ejercicios con metodos
*/

/*
1.- crea una funcion que reciba una cadena de texto como este "mi-cadena-corta"
y devuelva un nuevo arreglo con las palabras en camelCase ejemplo
"miCadenaCorta"
*/

const strTexto = "mi-cadena-corta-pero-es-de-oro";

function camelCase(str) {
    // .replace devuelve una cadena con algunas o todas las coincidencias de un patron, siendo cada una de estas coincidencias reemplazadas por el "reemplazo" 
    //  /lo colocado entre los slash es lo que se va a reemplazar/ la letra g significa global para que tome todos los valores del string
    // function (match, chr) match => porque devuelve una matriz de coinccidencias // char => para convertir el valor de entrada en su carácter correspondiente
    // /\W+(.)/g => esta es una expresion regular
    return str.replace(/\W+(.)/g, function (match, char) {
        // aqui solo mandamos a retornar char para los carateres que tendran salida en mayuscula con el .toUpperCase
        return char.toUpperCase();
    })
}

console.log(camelCase(strTexto));
/*
2.- ordena de mayor a menor las edades de un arreglo de personas
*/

let agePeople = [
    {nombre: "Grecia", edad: 9},
    {nombre: "Vane", edad: 31},
    {nombre: "Adrian", edad: 31},
    {nombre: "Gerardo", edad: 53},
    {nombre: "Concepcion", edad: 73},
    {nombre: "Jose", edad: 78},
]

// function ages(user) {
//     return agePeople.sort;
// }
agePeople.sort(function(a, b) {
    if (a.name > b.name) {
        return 1;
    }
    else if (a.name < b.name) {
        return -1;
    }
    return 0;
})

console.log(agePeople);
/*
3.- supongamos que tenemos un arreglo de cadenas. Nos gustaria tener una copia
ordenada del mismo, pero mantener el original sin modificar. Crea una funcion
que reciba un arreglo de cadenas y devuelva un nuevo arreglo con las cadenas
ordenadas sin modificar el original.
*/


//
/*
4.-crea una funcion que reciba como parametro un arreglo de nombres y devuelva
un arreglo sin repetir ningun nombre
*/

/*
5.-crea una funcion que reciba un arreglo de numeros y devuelva un nuevo arreglo
con la suma de los arreglos
*/

/*
6.- crea una funcion que reciba n arreglos de numeros y devuelva un nuevo arreglo
con la suma de los arreglos
*/