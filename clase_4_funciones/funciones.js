//? una funcion => es un bloque de codigo que realiza alguna o cierta operacion

// todo ESTRUCTURA
//? function => palabra reservada
//? unafuncion => nombre que le damos a la funcion
//? () => adentro de los (van los parametros)
//? {} => adentro de las {es el cuerpo de la funcion}
//? Dentro del cuerpo de la funcion puede tener instrucciones
//? return => retorna el valor de la funcion

function unaFuncion() {
    // console.log("soy una funcion");
    return "Soy una funcion"
}

// una vez declarada la funcion se tiene que mandar a llamar de la siguiente manera
// unaFuncion();

let valorDeFuncion = unaFuncion();

//! para que se muestre en consola se tiene que usar el console.log de esta manera
console.log(valorDeFuncion);

//? una utilidad de las funciones es reutilizar codigo

// ===================================================================================

function dosFuncion() {
    return "Soy la otra funcion";
}

let segValorFuncion = dosFuncion();

console.log(segValorFuncion);

function saludar(name) {
    // console.log("Hola " + name);
    // o se puede usar return en caso de no querer usar console.log
    return "hola " + name;
}

//? cuando invocamos la funcion lo que esta dentro de los (se llama argumento)
//? saludar("Adrian");

//! cuando no usamos el console.log dentro del cuerpo de la funcion lo vamos a colocar fuera de la siguiente manera
//! ponemos la variable con el argumento dentro de los parenteris del console.log
console.log(saludar("Adrian2"));

// ================================================================================================================

//todo muestra de funciones con parametros por default
function miNombre(name = "Grecia"){
    return "hola yo soy " + name;
}

console.log(miNombre());


function decirNombre(name) {
    console.log("mi nombre es " + name);
    // return; colocado de esta manera hasta ahi para la funcion y no va a mostrar ninguna linea de codigo  que este despues de el.
    return;

    console.log("que mas pues");
}

console.log(decirNombre("Vanessa"));

// ===================================================================================================================================

//todo funcion declarada
//? no importa si invocamos la funcion antes de declararla se va a mostrar bien por consola por el Hoisting (elevamiento de funciones)

diNombre("Gerardo");

function diNombre(name) {
    console.log("hola este soy yo "+ name);
}

// ===================================================================================================================================

//todo funcion expresada
//? esta asignada a una variable const por convencion
//? tambien llamadas funciones anonimas
// const no tiene hoisting solo se puede invocar despues de declarar la funcion
// es conveniente usar cuando somos desordenados haciendo el codigo

const ponerNombre = function(name) {
    console.log("Hola este es mi nombre " + name);
}

ponerNombre("Lisset");

function calcularNombre() {
    
    if (true) {
        var name = "Grecia";
        console.log(name);
    }
}

calcularNombre();

// ==============================================================================

//todo operador Ternario
// devuelve una condicion
//? let result = false ? "verdadero" : "falso";
// es un bloque de desicion

function calcularEdad(edad) {
    return edad >= 18 ? true : false
}

let resultCalcularEdad = calcularEdad(3);

console.log(resultCalcularEdad);

// ==============================================================================

//todo parsiar una fecha usando slice

 let date1 = "11011991";
 let date2 = "25041991";
 let date3 = "09082012";

 function parseDate(date) {
     let day = date.slice(0,2);
     let month = date.slice(2,4);
     let year = date.slice(4,8);
     console.log(`${day}/${month}/${year}`);
 }

 parseDate(date2);
 parseDate(date1);
 parseDate(date3);
 
// let fecha1 = "07121958";

// function parseDate(date) {
//     let day = date.slice(0,2);
//     let month = date.slice(2,4);
//     let year = date.slice(4,8);
//     console.log(`${day}/${month}/${year}`);
// }

// parseDate(fecha1);

let date = "07121958";
let datee = "25041955";

function parseDate(date) {
    let day = date[0] + date[1];
    let month = date[2] + date[3];
    let year = date[4] + date[5] + date[6] + date[7];
    let result = day +"/"+ month +"/"+ year;

    return result;
}

console.log(parseDate(date));
console.log(parseDate(datee));

// ============================================================================

//todo buscar nombres dentro de una lista de strings
let str = "gerardo";

function buscarNombre(variableStr) {
    // se declara la variable con la lista de nombres
    let muchosNombres = "Vanessa, Grecia, Martha, Lisset, adrian";
    // se coloco el toLowerCase para convertir las letras en minusculas, por si se introduce en mayusculas y la lista esta en minusculas
    // se agrega .includes para evaluar si se encuentra el argumento que estamos buscando
    return muchosNombres.includes(variableStr.toLowerCase());
}

console.log(buscarNombre(str));