// ESTE ES SOLO UN ARCHICO ENLAZADO A INDEX.HTML PARA MOSTRAR LOS RESULTADOS EN LA CONSOLA
// DEL NAVEGADOR

// const name1 = 'adrian';
// const curp = 'viaa910111hmclvd05';
// const fechaNacimiento2 = '11-01-1991';

// console.log(fechaNacimiento2);
// console.log(curp);
// console.log(name1);

// aqui creamos las variables pero no le damos valor
let nombre2, apellidos;
// aqui le damos valor a las variables antes declaradas
nombre2 = 'Grecia';
apellidos = 'Villegas Romero';

// en const tenemos que darles valor de inmediato cuando se declare
const primeroNombre = 'adrian';
let primerApellido = 'villegas';

console.log(nombre2, apellidos);
console.log(primeroNombre, primerApellido);

// ================================================================

let variable1 = 'adrian';
let variable2 = variable1 + ' villegas';
let variable3 = variable1 + variable2;

console.log(variable3);

// ================================================================

const miNombre = 'adrian';
const miApellido = 'villegas';

const concatenar = 'hola, mi nombre es ' + miNombre + ' y mi apellido es ' + miApellido;
const miConcatenar = `hola, mi nombre es ${miNombre} y mi apellido es ${miApellido}`;

// concatenacion template string con salto de linea \n
const concatenacionSalto = `hola, mi nombre es ${miNombre} \n y mi apellido es ${miApellido}`;

console.log(concatenar);
console.log(miConcatenar);
console.log(concatenacionSalto);

// ================================================================

// variable con salto de linea
const listaDeFrutas = 'mango\npiña\ndurazno\nmelon';

console.log(listaDeFrutas);

// ================================================================