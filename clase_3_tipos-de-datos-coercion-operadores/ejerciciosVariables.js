/******************************/
/* Ejercicios con variables: */
/*****************************/

// Ejercicio 1:
// 1. Declarar dos variables: nombre y usuario sin asignarle ningún valor.

let nombre, usuario;

// 2. Asignar tu nombre a la variable nombre.

nombre = 'Adrian';

// 3. Copia el valor de nombre a la variable usuario.

usuario = nombre;

// 4. sin usar la consola responde ¿Qué valor tiene la variable usuario?
// Adrian
console.log(usuario);

// Ejercicio 2:
// ¿Cómo nombrarías a dicha variable? *en ingles
// 1. Crea una variable con el nombre de "nuestro planeta".

let ourPlanet;

// 2. Crea una variable para almacenar el nombre del "usuario actual" de un sitio web.

let userWeb;



// Ejercicio 3:
// ¿Qué valor tiene la variable userName?
// Adrian

// 1. Crea la variable userName usando var.

var userName;

// 2. Asigna el nombre de una persona a la variable userName.

userName = 'Gerardo';

// 3. Crea otra variable con el mismo nombre de la variable anterior.

var userName;

// 4. Asigna tu nombre a esta variable.

userName = 'Adrian';

console.log(userName);

/*
Ejercicio 4:
¿Cuál es la diferencia entre var, let y const?
*/

// var tiene un alcance global y tiene hosting (elevamiento) y se puede cambiar el valor
// let no tiene hosting y tambien se puede cambiar el valor
// const se tiene que dar el valor en cuanto se declara, y su valor no se puede modificar

// ? const => es el valor de una variable que nunca sera cambiado, por lo tanto es una costante durante todo el programa
// todo let =>permite ser reasignada, tiene alcance de bloque
// ! var =>permite ser reasignada y tiene alcance global, nos permite declarar 2 variables con el mismo nombre