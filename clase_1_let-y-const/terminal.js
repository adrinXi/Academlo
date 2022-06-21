// pwd # Imprimir el directorio actual
// cd # Cambiar de directorio
// cd .. # Regresar un directorio

// ls # Listar archivos
// mkdir # Crear directorio - mkdir nombre_directorio - crear archivos - nombre.extencion
// ni # crear un nuevo archivo - ni nombre_del_archivo.extencion
// touch # Crear archivo - touch nombre_archivo.extension - mac o linux
// rm # Eliminar archivo - rm nombre_archivo
// rm -r # Eliminar directorio - rm -r nombre_directorio
// mv # Renombrar archivo - mv nombre_archivo nombre_archivo_nuevo
// cp # Copiar archivo - cp nombre_archivo nombre_archivo_nuevo

// copy con # Crear archivo - copy con name.ext -> {copy content}
// del # Eliminar un archivo - del name.ext 
// rd # Eliminar carpeta - rd folder

// VARIABLES
// ES UN ESPACIO EN MEMORIA, DEPENDIENDO DE SU TIPO PUEDE CAMBIAR DE VALOR DURANTE 
// LA EJECUCION DEL PROGRAMA.

// CONST
// SOLO PUEDE SER INICIALIZADA UNA VEZ DURANTE TODO EL PROGRAMA, ES DECIR QUE
// NO PUEDEN TOMAR OTRO VALOR DURANTE LA EJECUCION DE ESTE.

// const name = "adrian" //correcto
// const cc = "1001505XXX" //correcto
// const fechaNacimiento = "11-01-1991" //correcto

// const fechaNacimiento = "11-01-1990" //incorrecto
// fechaDeNacimiento = "11-01-1992" //incorrecto

// INICIALIZAR const
// DEBEMOS SIEMPRE AL DECLARAR LA VARIABLE INICIALIZARLA (ASIGNAR UN VALOR), YA 
// QUE SINO, NOS DARA ERROR

// const nombre ; // incorrecto
// const nombre = "Adrian" //correcto

/*NOTA.- NO TIENE HOSTING (ELEVAMIENTO)*/

// LET
// PUEDEN SER MODIFICADAS, PERO NO RE-DECLARADAS

// let cantidadNaranjas = '10' //correcto
// let cantidadPeras = '12' //correcto

// let cantidadNaranjas = '5' //correcto
// let cantidadPeras = '6' //correcto

// let cantidadNaranjas = "3"; // incorrecto
// let cantidadPeras = "1"; // incorrecto

// INICIALIZAR let
// AL MOMENTO DE DECLARAR UNA VARIABLE CON LET SE PUEDE DEJAR VACIA O SE PUEDE ASIGNAR
// UN VALOR

// let cantidadNaranjas; //undefined => correcto

/*NOTA.- NO TIENE HOSTING (ELEVAMIENTO)*/

// VAR
// PUEDEN SER MODIFICADAS Y RE-DECLARADAS DENTRO DE SU AMBITO, TIENE UN ALCANCE O SCOPE GLOBAL

// var cantidadCamisas = "10"; // correcto
// var cantidadZapatos = "12"; // correcto

// cantidadCamisas = "5"; //correcto
// cantidadZapatos = "6"; //correcto

// var cantidadCamisas = "3"; //correcto
// var cantidadZapatos = "1"; //correcto

/*NOTA.- var hace cosas raras */

// var a
// console.log(a) // undefined
// var a = 5;
// console.log(a); // 5

/*NOTA.- SI TIENE HOSTING (ELEVAMIENTO) */

// DECLARAR VARIABLES DEL MISMO TIPO

// let frutaUno = 'manzana';   frutaDos = 'pera';
// const marcaUno = 'adidas';  marcaDos = 'nike';
// var mesUno = 'Enero';   mesDos = 'Febrero';

// EJEMPLO 1

// const variable1 = 1;
// let variable2 = 2;

// if (true) {
//     const variable1 = 10;
//     let variable2 = 20;
//     var variable3 = 3;

//     console.log(variable1, variable2, variable3 + " => Adentro del if");
// }

// console.log(variable1, variable2, variable3 + " Afuera del if");


// EJEMPLO 2
// ESTO NOS DARA UN ERROR, ANALIZAR QUE ESTA PASANDO

// if (true) {
//     var variable1 = 1;
//     let variable2 = 2;
//     const variable3 = 4;
// }

// console.log(variable1, variable2, variable3);

// CONCATENAR
// Concatenación es el proceso de anexar una cadena al final de otra cadena. Las cadenas se concatenan con el operador + 

// TRADICIONAL +
// const primerNombre = "brayan";
// const segundoNombre = "stiven";

// const concatenar =
//     "Hola mi primer nombre es " +
//     primerNombre +
//     " y mi segundo nombre es " +
//     segundoNombre +
//     " => variable";

// console.log(concatenar);

// console.log(
//     "Hola mi primer nombre es " +
//     primerNombre +
//     " y mi segundo nombre es " +
//     segundoNombre +
//     " => log"
// );

// TEMPLATE STRINGS
// const primerNombre = "brayan";
// const segundoNombre = "stiven";

// const concatenar = `Hola mi primer nombre es ${primerNombre} y mi segundo nombre es ${segundoNombre} . => variable`;
// console.log(concatenar);

// console.log(
//     `Hola mi primer nombre es ${primerNombre} y mi segundo nombre es ${segundoNombre} . => variable`
// );

// SALTO DE LINEA \n
// const primerNombre = "brayan";
// const segundoNombre = "stiven";

// const concatenar = `Hola mi primer nombre es ${primerNombre}\ny mi segundo nombre es ${segundoNombre}. => variable`;
// console.log(concatenar);

// console.log(
//     `Hola mi primer nombre es ${primerNombre}\ny mi segundo nombre es ${segundoNombre}. => variable`
// );

// TIPOS DE DATOS
// Antes de empezar a ver los tipos de datos les voy a presentar el typeof arg El cual nos ayuda a identificar el tipo de datos que tenemos en la variable

// NUMBER
// typeof 4 // number
// Tenemos los Enteros `24` y también los números de punto flotante (números con decimales) `24.5` 
// Podemos realizar cualquier operación aritmética con este tipo de dato:

// 2 + 4 // 6
// 2 - 4 // -2
// 2 * 4 // 8
// 2 / 4 // 0.5

// Con ellos tenemos una biblioteca llamada Math, que es una clase de la cual derivan unos metodos

/*Math.floor()*/
// Redondea hacia abajo: 3.1 se convierte en 3, y -1.1 se hace -2.

// Math.floor(3.15) // 3

/*Math.ceil()*/
// Redondea hacia arriba: 3.1 torna en 4, y -1.1 torna en -1.

// Math.ceil(3.15) // 4

/*Math.round()*/
// Redondea hacia el entero más cercano: 3.1 redondea a 3, 3.6 redondea a 4, el caso medio 3.5 redondea a 4 también

// Math.round(3.15) // 3
// Math.round(3.6) //4 

/*Math.trunc()*/
// Remueve lo que haya tras el punto decimal sin redondear: 3.1 torna en 3, -1.1 torna en -1

// Math.trunc(3.6) // 3

/*Math.random()*/
//  Devuelve un número aleatorio entre 0 y 1 (no incluyendo 1)

// Math.random() // ?? => siempre devuelve algo diferente entre 0 y 1

// Math.trunc(Math.random() * 100) // Devuelve un numero entero 

// Math.trunc(Math.random() * (10 - 1) + 1) // numeros entre 1 y 10

/*Math.max()*/
//  Devuelve el mayor de entre una cantidad arbitraria de argumentos

// Math.max(1,2,3,4,5) // 5

/*Math.min()*/
// Devuelve el menor de entre una cantidad arbitraria de argumentos

// Math.max(1,2,3,4,5) // 1

// PROPIOS DE LA CLASE NUMBER

/*parseInt()*/
// convierte una cadena de texto en un numero entero

// parseInt('5') // 5

/*parseFloat()*/
// convierte una cadena de texto en un numero de punto flotante

// parseFloat('5.847') // 5.847

// ============================================================================

/*LO RARO*/

// INFINITY
// (valor infinito) representa el infinito matematico. es un valor especial que es
// mayo que cualquier otro numero.

// 1 / 0 //infinity
// typeof (Infinity) // number

// -INFINITY
// es un valor especial que es menor que cualquier numero

// -1 / 0 // -infinity
// typeof -Infinity // number

// NaN (Not a Number)
// representa un valor que no es un numero o el resultado de una operacion matematica
// incorrecta o indefinida

// 'hola que hace' / 2 // NaN
// typeof NaN // number

// ====================================================================================

/*STRING*/
// typeof 'hola mundo' // string
// un string en javascript es una cadena de caracteres y debe colocarse entre comillas

// En javascript hay 3 tipos de comillas
/*
1.- comillas simples => 'hola'
2.- comillas dobles => "hola"
3.- comillas invertidas => `hola` (backtiks)
*/

// si queremos poner comillas entre comillas hay dos formas

/*
1.- "soy una comilla 'simple'" => comillas dobles afuera, simples adentro

2.- 'soy una comilla "doble"' => comillas simples afuera, dobles adentro
*/

// INGRESANDO A UN CARACTER DEL STRING
// Los caracteres de los string son inmutables

// const name 'adrian';

// name[0]; // a
// name[1]; // d
// name[2]; // r
// name[3]; // i
// name[4]; // a
// name[5]; // n

// name[5] = N // incorrecto
// name.replace('n', 'N'); //adriaN //correcto

/*METODOS DE STRING*/
// PARA LOS EJEMPLOS VAMOS A TOMAR ESTA CONSTANTE

const nameUser = 'Adrian Villegas Avendaño';

// .length => representa la longitud de un string

nameUser.length //26

// .toUpperCase => Generea una nueva string en mayusculas

nameUser.toUpperCase() // ADRIAN VILLEGAS AVENDAÑO

// .toLowerCase() => genera una nueva string en minusculas

nameUser.toLowerCase() // adrian villegas avendaño

// .includes(arg) => devuelve true o false si el argumento fue encontrado en el string

nameUser.includes('Adrian') //true
nameUser.includes("adrian") //false

// .split(arg) => divide un objeto de tipo string en un array (vector) de cadenas mediante
// la separacion de la cadena en subcadenas

nameUser.split(' '); // ['Adrian', 'Villegas', 'Avendaño']

// .join => une todos los elementos de una matriz (o un objeto similar a una matriz) en una
// cadena y devuelve esta cadena

nameUser.split(' ').join('') //AdrianVillegasAvendaño

// .repeat(#) => construye y devuelve una nueva cadena que contiene el numero especificado de copias 
// de la cadena en la cual fue llamada, concatenados

nameUser.repeat(2) //Adrian Villegas AvendañoAdrian Villegas Avendaño

// .trim() => elimina los espacios en los extremos

nameUser.trim() // Adrian Villegas Avendaño => sin espacios

// .replace(argReplace, argNew) => devuelve una nueva cadena con algunas o todas las conincidencias de
// un patron, siendo cada una de estas coincidencias reemplazadas por un reemplazo

nameUser.replace('Adrian', '||| adrian |||'); // |||adrian||| Villegas Avendaño

// =====================================================================================================

/*BOOLEAN*/
// typeof true //boolean
// Los booleanos son valores logicos que pueden ser true o false
// este tipo se utiliza comunmente para almacenar valores de si/no: true significa "si,correcto,verdadero",
// y false significa "no,incorrecto,falso"
// para javascript es importante saber que toma el 0 como false y el 1 como true

// para saber el valor que tiene un dato en booleano utilizamos la funcion boolean(arg)

Boolean(null); // false
Boolean(undefined); // false
Boolean(NaN); // false
Boolean(''); // false
Boolean(0); // false

Boolean(1); // true
Boolean('adrian'); // true
Boolean(true); // true
Boolean(Infinity); // true
Boolean(-Infinity); // true

/*NULL*/
// typeof null // null
// el valor especial null no pertenece a ninguno de los tipos descritos anteriormente. Forma 
// un tipo propio separado que contiene solo el valor null
// Es solo un valor especial que representa "nada", "vacio", o "valor desconocido"

/*UNDEFINED*/
// typeof undefined // undefined
// el valor especial undefined tambien se distingue. Hace un tipo propio, igual que null
// El significado de undefined es "valor no asignado"

let miVariable;

// por ejemplo si una variable es declarada pero no asignada, entonces es undefined

/*COERCION*/
// tambien denominada una comparacion

// implicita    ==
// explicita    ===

/*OPERADORES*/
// OPERADORES ARITMETICOS
// OPERADORES SOPORTADOS
// suma +
5 + 5 // 10

// resta -
5 - 5 // 0

// multiplicacion *
5 * 5 //25

// division /
5 / 5 // 1

// modulo %
17 % 2 //1

// exponenciacion **
2 ** 4 // 16

// GERARQUIA DE OPERACIONES
// PARENTESIS
// POTENCIAS Y RAICES
// MULTIPLICACIONES Y DIVISIONES
// SUMAS

/*OPERADORES DE ASIGNACION*/

// = // operador de asignacion
// ++ // operador de incremento
// -- // operador de decremento
// += // adicion mas asignacion
// -= // sustraccion mas asignacion

// let numero = 10;

// numero // 10
// numero++ // 11
// numero++ //12
// numero-- // 11
// numero-- // 10

// numero+= // 11
// numero+= // 12
// numero-= // 11
// numero-= //10

// OPERADORES DE COMPARACION
// mayor que >
// menor que <
// mayor o igual que >=
// menor o igual que <=
// igual que ==
// diferente que !=
// igualdad estricta ===

// OPERADORES LOGICOS
// or ||
// and &&
// not !
// null coalesing ??

/*===FUNCIONES===*/
// una funcion es un bloque de codigo que realiza alguna operacion
// SINTAXIS

// DECLARACION
function nombreDeMiFuncion(parametros) {
    // instrucciones
}

// LLAMADO A LA FUNCION
nombreDeMiFuncion(argumentos)

// function => con esta palabra reservada declaramos a la funcion
// nombreDeMiFuncion => le damos el nombre a la funcion
// (parametros, ...) => los parametros de la funcion
// {instrucciones} => dentro de las llaves va lo que necesitamos que la funcion haga
// (argumentos) => argumentos son los valores que mandamos al momento de invocar la funcion

/*TIPOS DE FUNCIONES*/
// LAS QUE NO RETORNAN

function mostrarMensaje() {
    console.log('Mensaje de texto');
}

mostrarMensaje();

// LAS QUE RETORNAN

function retornarNombre() {
    const nombre = "adrian";
    return nombre;
}


retornarNombre();

// LAS QUE RECIBEN PARAMETROS

function saludar(name) {
    return "hola como estas, " + name; // Hola como estas, Adrian
}

saludar("Adrian");

// Y SI NO RECIBE NINGUN PARAMETRO LO PODEMOS DECLARAR POR DEFAULT

function saludar(name = 'Adrian') {
    return "Hola como estas, " + name; // Hola como estas, Adrian
}

saludar();

// SCOPE O ALCANCE
// todo lo declarado en una funcion se queda en la funcion
// "lo que pasa en las vegas se queda en las vegas"

function miFuncion() {
    const numero1 = 5;
    let numero2 = 6;
    var numero3 = 7;

    console.log(numero1, numero2, numero3); // 5, 6, 7 
}

miFuncion();

function miFuncion() {
    const numero1 = 5;
    let numero2 = 6;
    var numero3 = 7;
}

console.log(numero1, numero2, numero3); //Error, estan declaradas adentro

miFuncion();

// cuando hacemos una funcion debemos de controlar que lo que estamos pidiendo en los
// parametros de verdad exista, ya que con este parametro haremos diversas operaciones, ejemplo
// el valor undefined no tiene ningun metodo

function separarNombre(nombre) {
    return nombre.split("");
}

separarNombre(); //Error - crashea nuestra aplicacion

// para eso existe el try catch, o como se le conoce el manejo del error, se compone del try que 
// intenta hacer y si algo falla pasa al catch aqui se mostrara el error y finalmente el finally

try {
    // se ejecuta el codigo, si algo pasa, salta
}catch(Error) {
    // aqui mostrara el error
}finally {
    // siempre se ejecuta el finally, aunque es opcional ponerlo
}

// VEAMOS LA FUNCION

function separarNombre(nombre) {
    try {
        return nombre.split("");
    }catch(Error) {
        console.log("Hubo un error ", Error);
    }finally {
        console.log("Final");
    }
}

separarNombre();
// hubo un error lorem...
// Final

/*===CONDICIONALES===*/
// las condicionales son estructuras que permiten elegir entre la ejecucion de una accion u otra

// SENTENCIAS if, else if, else

if (true) {
    // se ejecutara el codigo dentro de este bloque condicinal
}

if (false) {
    // no se ejecutara el codigo dentro de este bloque condicional
}

// cuando evaluamos una condicion puede haber 2 caminos, elcamino true y el camino false

if (true/false) {
    // camino true
}else {
    // camino false
}

// tener cuidado, ya que el codigo aunque entre a un condicional seguira ejecutando lo que hay abajo
// de el, tener en cuenta si queremos que esto suceda o no

if (true) {
    console.log("primer condicional");
}

if (false) {
    console.log("segunda condicional");
}

if (true) {
    console.log("tercer condicional");
}

// primer condicional
// tercer condicional

// si lo que queremos es que cuando entre a un condicional no entre a ningun otro
// debemos manejar la clauula return

if (true) {
    console.log("primer condicional");
}

if (false) {
    console.log("segunda condicional");
    return;
}

if (true) {
    console.log("tercer condicional");
}

// primer condicional
// segundo condicional

// si no queremos utilizar el return deberiamos utilizar if encadenados
// if, else if, else

if (false) {
    console.log("primer condicional");
}else if(true) {
    console.log("segundo condicional");
}else if(false) {
    console.log("tercer condicional");
}else {
    console.log("cuarto condicional");
}

// segundo condicional

/*OPERADOR TERNARIO*/
// el operador ternario consta de 3 partes
// condicion, si la condicion sale true, si la condicion sale false

condicion ? true : false

5 > 4 ? "el 5 es mayor que 4" : "el 5 no es mayor que 4"

/*SENTENCIA SWITCH*/
// la declaracion switch evalua una expresion, comparando el valor de esa expresion con una instancia case
// y ejecuta declaraciones asociadas a ese case, asi como las declaraciones en los case que siguen

let op = 3;

switch (op) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break
    case 3:
        console.log(3);
        break

    default:
        console.log("no hay mas opciones para evaluar");
        break;
}

// 3

/*===BUCLES===*/
// WHILE => crea un bucle que ejecuta una sentencia especificada mientras cierta condicion se evalue como verdadera
// dicha condicion es evaluada antes de ejecutar la sentencia

let = 0;

while (count !== 5) {
    // 0
    // 1
    // 2
    // 3
    // 4
    count++;
}

// DO WHILE => la sentencia (hacer mientras) crea un bucle que ejecuta una sentecia especificada,hasta que la condicion de
// comprobacion se evalua como falsa. La condicion se evalua despues de ejecutar la sentencia, dando como resultado que la
// sentencia especificada se ejecute al menos una vez

do {
    // me ejecuto una vez
}while (false);

// FOR => crea un bucle que consiste en tres expresiones opcionales, encerrada en parentesis y separadas por puntos y comas, seguidas
// de una sentencia ejecutada en un bucle

// primer expresion, inicializacion de la variable iteradora
// segunda expresion, condicion
// tercera expresion, incremento de la variable iteradora

for (let i = 0; i < 5; i++) {
    // 0
    // 1
    // 2
    // 3
    // 4
}

/*===BREAK Y CONTINUE===*/
// BREAK => con el break nos saldremos del for en caso de que asi lo necesitemos

for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i == 3) {
        break;
    }
    
}

// 0
// 1
// 2
// 3

// CONTINUE => nos saltaremos hacia el siguiente indice

// for (let i = i < 5; i++) {
//     if (i == 3) {
//         continue;
//     }
//     console.log(i);
// }

// 0
// 1
// 2
// 3
// 4

/*===FOR ANIDADOS===*/
// anidar un bucle consiste en meter ese bucle dentro de otro

// let (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         // 0 0
//         // 0 1
//         // 0 2
//         // 0 0
//         // 0 1
//         // 0 2
//         // 0 0
//         // 0 1
//         // 0 2
        
//     }
// }

/*===ARREGLOS===*/
// existe una estructura llamada array (llamada en español arreglo o matriz/vector)  para almacenar
// colecciones de datos ordenadas, donde cada elemento tiene un indice, realmente dentro de un array
// podemos almacenar cualquier tipo de dato

const frutas = ['manzana', 'pera', 'uva', 'fresa']
    // indices     0          1      2        3

const nombreS = ['Grecia', 'Vane', 'Adrian', 'Gerardo', 'Concepcion', 'Jose']
    // indices     0         1        2           3         4             5

// para ingresar a cualquier elemento de nuestro array podemos utilizar la notacion de corchetes asi 
// mismo como lo haciamos con los strings

frutas[0] //manzana
frutas[1] //pera
frutas[2] //uva
frutas[3] //fresa

nombreS[0] // Grecia
nombreS[1] // Vane
nombreS[2] // Adrian
nombreS[3] // Gerardo
nombreS[4] // Concepcion
nombreS[5] // Jose

// asi mismo con la propiedad length podremos obtener la longitud de nuestro array tal como
// lo haciamos con los strings, longitud que nos servira mas tarde para recorrerlo

frutas.length //4
nombreS.length //6

// con esta propiedad podremos recorrer nuestro array

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
    
}

// manzana
// pera
// uva
// fresa

for (let i = 0; i < nombreS.length; i++) {
    console.log(nombreS[i]);

}

// Grecia
// Vane
// Adrian
// Gerardo
// Concepcion
// Jose

// aunque ademas del for tenemos una sentencia demasiado especial llamada for of. la sentencia for of
// ejecuta un bloque de codigo para cada elemento de un objeto iterable, como lo son:
// String, Array. En este orden de ideas tambien podemos recorrer nuestros arrays y strings con esta sentencia

for (const fruta of frutas) {
    console.log(fruta);
}

// manzana
// pera
// uva
// fresa

for (const nombre of nombreS) {
    console.log(nombre);
}

// Grecia
// Vane
// Adrian
// Gerardo
// Concepcion
// Jose

// Algo importante que debemos saber es que existen array dentro de arrays
// y a esto se le conoce como array bidimensional

// Podemos acceder a el mediante la notacion de los corchetes []

const arrayBidimencion = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9, 10],
];

arrayBidimencion[0][0] //1
arrayBidimencion[0][1] //2
arrayBidimencion[0][2] //3
arrayBidimencion[1][0] //4
arrayBidimencion[1][1] //5
arrayBidimencion[1][2] //6
arrayBidimencion[2][0] //7
arrayBidimencion[2][1] //8
arrayBidimencion[2][2] //9
arrayBidimencion[2][3] //10

// O lo podemos hacer mediante los for

const arrayBidimencion1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9, 10],
];

for (let i = 0; i < arrayBidimencion1.length; i++) {
    for (let j = 0; j < arrayBidimencion1[i].length; j++) {
        console.log(arrayBidemencion1[i][j]);
    }
}

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

/*ALGUNOS METODOS DE LOS ARRAYS*/
// METODOS QUE TRABAJAN SOBRE EL FINAL DEL ARRAY

// .pop => extrae el ultimo elemento del array y lo devuelve
// .push => agrega el elemento al final del array. Este metodo es igual a:
array[array.length -1]

// METODOS QUE TRABAJAN AL INICIO DEL ARRAY
// .shift => extrae el primer elemento del array y lo devuelve
// .unshift => agrega el elemento al principio del array

// los metodos push y unshift pueden agregar multiples elementos de una vez 
push(item, item2)

// OTROS METODOS UTILES

// .splice => funciona como una navaja suiza para arrays. Puede hacer todo: insertar
// remover y reemplazar elementos

// splice(posicion, numero de elemetos a remover, elementos a insertar, ..)

// los indices negativos estan permitidos

// .slice => es mucho mas simple que splice(), devuelve una copia del array desde la posicion
// inicial hasta la posicion final (no incluida)

// slice(posicion inicial, posicion final)

// cuando no se le pasa ningun argumento devuelve una copia del array completo. los indices negativos
// tambien estan permitidos, en cuyo caso se asume la posicion desde el final del array

// concat() => es un metodo que crea un nuevo array que incluye los valores de otros arrays y elementos
// adicionales

// concat(array1, array2, elemento, ...)

// acepta cualquier numero de argumentos, tanto arrays como valores y devuelve un nuevo array con los 
// elementos de los arrays y los nuevos elementos

/*===BUSCAR DENTRO DE UN ARRAY===*/
// ahora vamos a ver metodos que buscan elementos dentro de un array

// los metodos indexOf(), lastIndex() e includes() tienen la misma sintaxis y hacen basicamente lo mismo
// que sus contrapartes de strings, pero operan sobre elementos en lugar de caracteres

// .indexOf() => devuelve la posicion del elemento en el array,o -1 si no lo encuentra

// indexOf(elemento, posiscion inicial)

// retorna la posicion del primer elemento que encuentre, si no se pasa una posicion inicial, se empieza 
// desde el principio. Tener en cuenta que el metodo usa una comparacion estricta ===

// .lastIndexOf() => devuelve la posicion del ultimo elemento en el array, o -1 si no lo encuentra

// lastIndexOf(elemento, posición inicial)

// es exactamente igual que el metodo indexOf() pero busca de derecha a izquierda y retorna a la posicion del 
// ultimo elemento que encuentre

// .includes() => devuelve true si el elemento esta en el array, o false si no lo esta

// includes(elemento, posición inicial)

// es perfecto cuando solo queremos comprobar si un elemento esta incluido y no necesitamos saber su indice

/*OTROS MAS*/
// .reverse() => revierte el orden de los elementos en array

// .join() => crea un string de arrays con los elementos unidos con glue(pegamento) entre ellos
// join("pegamento") // separador

// puede usarse cualquier caracter para separar la union de los elementos del string y luego devuelve ese string