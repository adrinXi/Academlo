/******************************/
/* Ejercicios con funciones: */
/*****************************/
// Declara una función que reciba como parámetro nombre y edad y que imprima en consola: "Hola, mi nombre es [nombre] y tengo [edad] años".
let nombre = 'Vane';
let edad = 31;

function userLog(vnombre, vedad) {
    let saludo = `Hola, mi nombre es ${vnombre} y tengo ${vedad} años`;

    return saludo;
}

console.log(userLog(nombre,edad));

/*
1 - Declara una variable global llamada saludo y colocale como valor "Hola los saludo desde:"
2 - Declara una función sin parámetros, dentro crea una varaible local llamada pais y colócala como valor el país de donde vienes.
3 - Tu función debe mostrar por consola: "Hola los saludo desde [pais]".
*/

var saludo = 'Hola los saludo desde ';

function country() {
    let pais = saludo + 'Mexico';

    return pais;
}

console.log(country(saludo));

// Declara una función que reciba como parámetro numero y numero2 y que retorne el resultado de la suma de ambos.

// let numero1 = 10;
// let numero2 = 1;
// let numero3 = 56;
// let numero4 = 67;
// let numero5 = 5;
// let numero6 = 71;
// let numero7 = 12;
// let numero8 = 34;

function adicion(vnumero1, vnumero2) {
    let suma = vnumero1 + vnumero2;

    return suma;
}

console.log(adicion(3, 7));
// console.log(adicion(numero3, numero4));
// console.log(adicion(numero5, numero6));
// console.log(adicion(numero7, numero8));

//* Con el valor retornado de la función anterior realiza una función que reciba como parámetro ese resultado y que retorne el doble del resultado.

const returnSuma = adicion(3, 6)

function sumaPorDos(returnSuma) {
    return returnSuma + returnSuma;
}

console.log(sumaPorDos(3,7));
// function x2(suma) {
//     let alDoble = suma * 2;

//     return alDoble;
// }

// console.log(x2(suma));

//* Crea una función que retorne un mensaje de bienvenida, recibiendo como parámetro el nombre de la persona, pero si no se recibe ningún parámetro debe retornar "Bienvenido Anónimo".

let usuario = 'Grecia';

function userLoger(name = 'Anonimo') {
    return 'Bienvenido ' + name;
}

console.log(userLoger(usuario));

//* Crea una función que compruebe si 2 números son iguales. Si lo son, retorna true, si no, retorna false

// let comp1 = 10;
// let comp2 = 10;

// function comparation(number1, number2) {
//     let compartionFinal = numero1 == numero2 ? true : false;

//     return compartionFinal;
// }

// console.log(comparation(comp1, comp2));