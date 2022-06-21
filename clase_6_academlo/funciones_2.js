// funcion expresada

// const name = function(params) {
//     return params;
// }

// funcion declarada
// function name(params) {
//     return params;
// }

// si mostramos la funcion y no retornamos nada nos va a mandar un undefined
// function name(params) {
//     console.log(params);
// }

// const hola = name("Adrian");

// console.log(hola);

// control + k + c => comentar
// control + k + u => descomentar


// EJERCICIOS
// Declara una funcion que reciba como parametros una frase y una palabra y que retorne true si esta la palabra y false si no esta
// de esta manera podemos buscar una palabra dentro de un string
const frase = "Hola mundo soy el mejor dev";
const palabra = "dev";

function searchWord(str, word) {
    // se coloca .includes para buscar dentro de todas las palabras del string
    return str.includes(word);
}

// se coloca dentro del console.log(nombre de la funcion(los parametros de la funcion))
console.log(searchWord(frase, palabra));

// declara una funcion que retorne la longitud de la ultima palabra de la frase.
const frase2 = "Queremos la Champions para Vane";

function lastWordLength(str) {
    // declaramos una funcion con el str (frase). split para serparar los elementos y enseguida .length para la longitud de la frase
    let position = str.split(" ").length;
    // en el return colocamos el str. split para conservar la division de palabras y en seguida [nombre de la funcion let -1] para tomar la ultima palabra y agregamos .length para que nos muestre la longitud de la ultima palabra
    return str.split(" ")[position -1].length;
    // otra forma es la siguiente
    // return str.split(" ").slice(-1).join().length;
}

console.log(lastWordLength(frase2));

// declara una funcion que reciba como paramtro una frase y una palabra, debera reemplazar la ultima palabra de la frase por la otra palabra
const frase3 = "a mi perro le gusta ir al campo";
const remplazo = "parque";

function replaceStr(str, word) {
    // de esta manera ingresamos a la ultima palabra
    let last = str.split(" ").slice(-1).join();
    // str.replace => reemplazar en el string (la funcion, word (parametro))
    return str.replace(last, word);
}

console.log(replaceStr(frase3, remplazo));

// Declara una función que reciba como parámetro 3 cadenas de texto, deberas extraer las edades de cada una de ellas y retornar la suma de ellas.
// la edad siempre sera la penultima en la cadena

const cad1 = "Hola, mi nombre es Erik y tengo 30 años";
const cad2 = "Hola, mi nombre es Brayan y tengo 25 años";
const cad3 = "Hola, mi nombre es Andres y tengo 40 años";

function extracAgeAndAdd(str1, str2, str3) {
    let num1 = parseInt(str1.split(" ")[str1.split(" ").length -2]);
    let num2 = parseInt(str2.split(" ")[str2.split(" ").length -2]);
    let num3 = parseInt(str3.split(" ")[str3.split(" ").length -2]);
    return num1 + num2 + num3;
}

console.log(extracAgeAndAdd(cad1, cad2, cad3));

// Declara una función que reciba como parámetro una cadena de texto y un número, deberá retornar la cadena repetida n veces siendo n el número recibido.
const cadena = "Hola";
const numero = 3;

function repeatStr(str, count) {
    return str.repeat(3);
}

// los argumentos se puede cambiar el valor 
console.log(repeatStr(cadena, numero));