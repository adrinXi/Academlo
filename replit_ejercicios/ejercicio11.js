/*
Encuentra la edad que más se repite

La función findMostCommonAge() recibe como parámetro un arreglo de estudiantes

El arreglo es una lista de estudiantes con una estructura como la siguiente

[
  { name: 'Daniela', age: 25 },
  { name: 'Andrea', age: 23 },
  { name: 'José', age: 27 },
  { name: 'Georg', age: 23 },
];
Tu labor es encontrar y retornar la edad que se repite más veces.

En el ejemplo anterior retornaríamos 23, ya que 23 es la edad que se repite más veces.

*Recuerda utilizar return para devolver tu solución.
*El arreglo que recibe la función puede tener n cantidad de estudiantes.
*/

const estudiantes = [
    { name: 'Daniela', age: 25 },
    { name: 'Andrea', age: 23 },
    { name: 'José', age: 27 },
    { name: 'Georg', age: 23 },
  ];

function findMostCommonAge(students) {

  let mostCommonAge = [];

  for(let i = 0; i < students.length; i++) {
    for(let j = 0; j < students.length; j++) {
      if(students[i].age === students[j].age) {
        mostCommonAge = students[j].age;
      }
    }
  }

  return mostCommonAge;
}



  console.log(findMostCommonAge(estudiantes));