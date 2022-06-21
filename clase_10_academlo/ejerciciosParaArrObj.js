/***************************************/
/* Ejercicios con arreglos y objetos: */
/**************************************/
// 1. Crear un objeto que contenga un arreglo de 5 nombres de personas.

// const peopleName = {
//   userName: ['Jose', 'Concepcion', 'Gerardo', 'Celsa', 'Alejandro']
// };

// * asi llamamos a un objeto y con . y el nombre de la propiedad a la que queremos ingresar
// console.log(peopleName.userName);

// 2. Crea un arreglo de 5 objetos, cada objeto debe contener un nombre y una edad.

const usuariosArray = [
  {usName: 'Jose', edad: 78},
  {usName: 'Concepcion', edad: 73},
  {usName: 'Gerardo', edad: 53},
  {usName: 'Celsa', edad: 51},
  {usName: 'Alejandro', edad: 49}
];

// 3. Del arreglo anterior, crea un nuevo arreglo que contenga solo los nombres de las personas.

function soloNombres(arraysUsuarios) {
  // *por convencion los arreglos se declaran con const
  // !este nuevo arreglo lo dejamos vacio.
  const namesU = [];

  for(let i = 0; i < arraysUsuarios.length; i++) {
    // ! aqui llamamos nuestro arreglo vacio nameU y usamos el metodo .push para ingresar informacion al arreglo vacio
    // ! .push(nombre de nuestro argumento [posicion en i].valor al que queremos acceder)
    namesU.push(arraysUsuarios[i].usName);
  }

  // !aqui ya solo retornamos el arreglo vacio que creamos en un inicio
  return namesU;
}

// console.log(soloNombres(usuariosArray));

// 4. Declara una función que reciba un el mismo arreglo de objetos y que retorne la suma de todas las edades.

function sumAge(numb) {
  // !iniciamos una variable let en 0 porque no nos esta pidiendo un arreglo 
  let sumArre = 0;

  for(let i = 0; i < numb.length; i++) {
    // !llamanos nuestra variable += nombre de nuestro parametro[posiscion indistinta dentro del arregle]. posicion que queremos
    sumArre += numb[i].edad;
  }
  // !retornamos nuestra variable
  return sumArre;
}

// console.log(sumAge(usuariosArray));

// todo aqui haremos una sola funcion para los problemas 3 y 4

function soloNombresAndsumAge(arraysUsuarios) {
  const uNames = [];
  let sumEdad = 0;

  for(let i = 0; i < arraysUsuarios.length; i++) {
    uNames.push(arraysUsuarios[i].usName);
    sumEdad += arraysUsuarios[i].edad;
  }
  
  return {usuariosArray, sumEdad,};
}


console.log(soloNombresAndsumAge(usuariosArray));

// todo checar porqu el arreglo me manda con todo y la edad y no solo el nombre, la suma esta bien

// 5. Del siguiente arreglo de objetos, realiza lo siguiente:


const usuarios = [
  {
    nombre: 'Erik',
    edad: 29,
    correo: 'erik@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/erik' },
      { nombre: 'twitter', url: 'twitter/erik' }
    ],
    genero: 'Hombre'
  },
  {
    nombre: 'Georg',
    edad: 33,
    correo: 'georg@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/georg' },
      { nombre: 'twitter', url: 'twitter/georg' }
    ],
    genero: 'Hombre'
  },
  {
    nombre: 'Andrea',
    edad: 42,
    correo: 'andrea@hotmail.com',
    social: [
      { nombre: 'facebook', url: 'facebook/andrea' },
      { nombre: 'twitter', url: 'twitter/andrea' }
    ],
    genero: 'Mujer'
  },
  {
    nombre: 'Oscar',
    edad: 31,
    correo: 'oscar@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/oscar' },
      { nombre: 'twitter', url: 'twiter/oscar' }
    ],
    genero: 'Hombre'
  },
  {
    nombre: 'Daniela',
    edad: 22,
    correo: 'andrea@uaq.mx',
    social: [
      { nombre: 'facebook', url: 'facebook/andrea' },
      { nombre: 'twitter', url: 'twitter/andrea' }
    ],
    genero: 'Mujer'
  }
]

// 5.1. Crea un array de nombre correos y almacena todos los correos del arreglo usuarios.
const correos = []
console.log(correos)

// 5.2. Crea un array de nombre cuentasDeFacebook y almacena todas las urls de las cuentas de facebook del arreglo usuarios.
const cuentasDeFacebook = []
console.log(cuentasDeFacebook)
