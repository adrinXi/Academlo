// todo Ejercicio 8

/**
 Mezclando datos de 2 arreglos

La función mergeData() recibe como parámetros 2 arreglos:
El primer arreglo es una lista de usuarios con una estructura como la siguiente

[
  { name: 'Georg', email: 'georg@academlo.com' },
  { name: 'Andrea', email: 'andrea@gmail.com' }
]
El segundo arreglo es una lista de asistencias con una estructura como la siguiente, donde attendance nos indica si el usuario asistió o no a sus clases de programación

[
  { email: 'georg@academlo.com', attendance: true },
  { email: 'andrea@gmail.com', attendance: false }
]
Tu labor es hacer una mezcla de los datos de ambos arreglos y devolver uno solo que contenga toda la información (sin datos duplicados).

Ejemplo:
En el caso de haber recibido los 2 arreglos mencionados anterior mente deberas retornar el siguiente arreglo:

  
[
    { name: 'Georg', email: 'georg@academlo.com', attendance: true },
    { name: 'Andrea', email: 'andrea@gmail.com', attendance: false }
]

*Recuerda utilizar return para devolver tu solución.
*El primer arreglo que recibe la función puede tener n cantidad de usuarios.
*El segundo arreglo que recibe la función puede tener n cantidad de asistencias.
 */

// let arreglo1 = [
//     { name: 'Georg', email: 'georg@academlo.com' },
//     { name: 'Andrea', email: 'andrea@gmail.com' },
//     { name: 'Andrea', email: 'andrea@gmail.com' },
//     { name: 'Andrea', email: 'andrea@gmail.com' },
//     { name: 'Andrea', email: 'andrea@gmail.com' },
//     { name: 'Andrea', email: 'andrea@gmail.com' }
//   ]

// let arreglo2 = [
//     { email: 'georg@academlo.com', attendance: true },
//     { email: 'andrea@gmail.com', attendance: false },
//     { email: 'andrea@gmail.com', attendance: false },
//     { email: 'andrea@gmail.com', attendance: false },
//     { email: 'andrea@gmail.com', attendance: false },
//     { email: 'andrea@gmail.com', attendance: false }
//   ];

// let newArray = [];

// function emailsUser(a, b) {
//     let newArray = [];

//     for(let i = 0; i < a.length; i++) {
//         newArray.push({name: a[i].name, email: a[i].email, attendance: b[i].attendance});
//     }

//     return newArray;
// }

// console.log(emailsUser(arreglo1,arreglo2));

// todo otra solucion

let datosV = [
    { name: 'Georg', email: 'georg@academlo.com' },
    { name: 'Andrea', email: 'andrea@gmail.com' }
  ]

let asistencia = [
    { email: 'georg@academlo.com', attendance: true },
    { email: 'andrea@gmail.com', attendance: false }
  ];

function mergeData2(datos = [], asistencia = []) {
    let array = [];

    array = [].concat(datos);

    for(let i = 0; i < datos.length; i++){
        if(asistencia[i].email === datos[i].email) {
            array[i].attendance = asistencia[i].attendance

        }
    }
    return array;
}

console.log(mergeData2(datosV, asistencia));