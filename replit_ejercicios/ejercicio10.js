// todo Ejercicio 10

/**
Cuenta los estudiantes de un país

La función countStudents() recibe 3 parámetros, los 2 primeros son arreglos y el tercero es un string

El primer arreglo es una lista de estudiantes con una estructura como la siguiente

[
  { name: 'Georg', email: 'georg@academlo.com', country_id: 1 },
  { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2 },
  { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2 },
  { name: 'Mónica', email: 'monica@gmail.com', country_id: 2 }
]
El segundo arreglo es una lista de países con una estructura como la siguiente

[
  { id: 1, name: 'Mexico', },
  { id: 2, name: 'Colombia' }
]
El tercer parámetro es el nombre de un país, por ejemplo: 'Colombia'

Tu labor es contar y retornar el número total de estudiantes que pertenezcan al país que reciba la función.

En el ejemplo anterior retornaríamos 3, ya que 3 estudiantes pertenecen al país con el id 2.

*Recuerda utilizar return para devolver tu solución.
*El primer arreglo que recibe la función puede tener n cantidad de estudiantes.
*El segundo arreglo que recibe la función puede tener n cantidad de países. *El tercer parámetro que recibe la función puede ser el nombre de cualquier país. 
*/

let student = [
    { name: 'Georg', email: 'georg@academlo.com', country_id: 1 },
    { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2 },
    { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2 },
    { name: 'Mónica', email: 'monica@gmail.com', country_id: 2 }
  ];

let countries = [
    { id: 1, name: 'Mexico', },
    { id: 2, name: 'Colombia' }
  ];


function countStudent(students = [], countries = [], countryName) {

  // !iniciamos unavariable en 0´s para que sea nuestro contador
  let idCount = 0; //* este es un contador, me contara las veces que se repita mi pais a buscar

  for(let i = 0; i < countries.length; i++){
    if(countries[i].name === countryName) {
      idCount = i + 1;
    }
  }
  
  let finalCount = 0; //* este es otro contador

  for(let i = 0; i < students.length; i++) {
    // si en el vector students en cualquier posicion en el elemento .country_id es igual a la variable idCount
    if(students[i].country_id === idCount) {
      // quiero que me retorne en una sola unidad
      finalCount++;
    }
  }

  return finalCount;
}

console.log(countStudent(student, countries, "Colombia"));