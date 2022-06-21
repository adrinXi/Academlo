 
 /*
// estas constantes una vez declaradas no se les puede cambiar el valor porque marcaria error
const nombre = "Adrian";
// nombre = "Alejandro"
console.log(nombre);


// en las varibles let se puede cambiar el valor despues de asignar el valor
let cantidadNaranjas = 30;
console.log(cantidadNaranjas);

cantidadNaranjas = 20;
console.log(cantidadNaranjas);

cantidadNaranjas = 10;
console.log(cantidadNaranjas);

// pasa lo mismo con VAR
*/

// 1 declarar dos variables nombre y usuario sin asignarle ningun valor
 
// let nombre, usuario;
// console.log(nombre, usuario);

// nombre = "Adrian";
// usuario = "Adrin_xi";

// console.log(nombre, usuario);

// tipos de Datos

// Number
let a = 17; // 17
let b = a - 7; // 10
let c = a + b + 1; // 28

console.log(Math.floor(2.3));
console.log(Math.ceil(2.3));
console.log(Math.round(2.4));
console.log(Math.trunc(99.3545));

let aux = Math.random() * 100;
console.log(aux);
console.log(Math.trunc(aux));

console.log(Math.max(1,2,3,4,5));
console.log(Math.min(1,2,3,4,5));

let numberOneString = "56";
let numberOneString2 = "56.576";

console.log(numberOneString);
numberOneString = Number.parseFloat(numberOneString2);

console.log(numberOneString);

console.log("6" + 56);

// String
let nombre = "Adrian";

// Boolean
let profesor = true; //false

// null
let billetera = null;

// Undefined
let pobreza;
