
// TIPOS DE DATOS

// NUMBER
let numberOne = 7;
let zapato = 7;

// STRING
let stringOne = 'Adrian';
let myName = 'adrian';

// BOOLEAN
let booleanOne = true // false
let programador = true;

// NULL
let nullOne = null;
let billetera = null;

// UNDEFINED
let undefinedOne = undefined;
let pobreza;

console.log(typeof zapato);
console.log(typeof myName);
console.log(typeof programador);
console.log(typeof billetera);
console.log(typeof pobreza);

// ============================================================

// libreria math

let a = 17; //17
let b = a - 10; //10
let c = a + b + 1; //17 + 10 + 1 =>28

console.log(Math.floor(2.3)); //lo redondea hacia abajo
console.log(Math.ceil(2.3)); //lo redondea hacia arriba
console.log(Math.round(2.3)); //lo redondea hacia abajo
console.log(Math.trunc(2.3)); //quita los decimales
console.log(Math.random()); //numeros aleatorios sin llegar a 1

// todo lo que ingresemos en un input es un string

let numberOneString = '56';
let numberOneString2 = '56.576';

// el metodo .parseInt convierte los string en numeros enteros
numberOneString = Number.parseInt(numberOneString);

console.log(numberOneString);
console.log(numberOneString2);

// hacer ejercicios de convertir string en numeros enteros y con punto flotante