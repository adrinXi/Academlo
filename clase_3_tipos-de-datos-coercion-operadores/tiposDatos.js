// ==========================================================

// todo number

let resultInfinity = -1 / 0;
let resultNaN = "una operacion " * 7;

console.log(resultInfinity); //-infinity
console.log(resultNaN);
console.log(typeof resultInfinity);
console.log(typeof resultNaN);

// ==========================================================

// todo string
// let name = "Hola mundo esto es un 'string'";

// para acceder a los caracteres
// console.log(name[0]);
// console.log(name[1]);
// console.log(name[2]);
// console.log(name[3]);

// * METODOS PARA STRINGS

let nameUser = "Adrian";

console.log(nameUser.length); // longitud del string
console.log(nameUser.toLowerCase()); // string minusculas se colocan los ()
console.log(nameUser.toUpperCase()); // string mayusculas se colocan los ()
console.log(nameUser.includes("z")); //me retorna true or false si el parametro se encuentra en el string
console.log(nameUser.includes("A")); //me retorna true or false si el parametro se encuentra en el string

let fullName = "   Adrian Villegas Avendaño   ";
console.log(fullName.split(" ")); //dividir un objeto segun lo que pasemos por parametro y me retorna un array
console.log(fullName.split(" ").join("")); //Nos junta la variable segun el argumento que pasemos
console.log(fullName.trim()); //limpiar el string en los extremos
console.log(fullName.replace("A","a").trim()); //se encarga de encontrar el primer parametro y reemplazarlo por el segundo

// =========================================================================================================================

//todo boolean

let verdad = true;
let mentira = false;

console.log(verdad,mentira);
console.log(typeof verdad, typeof mentira);

//todo Boolean (arg) solo devuelven o retorna true o false

console.log(Boolean(1)); //true
console.log(Boolean(0)); //false
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));

console.log(Boolean(true));
console.log("--------");
console.log(Boolean(NaN));
console.log(Boolean(Infinity));
console.log(Boolean(-Infinity));
console.log(Boolean("------"));

console.log(typeof "Adrian");
console.log(Boolean("Adrian"));
console.log(Boolean(-1));

// ================================================================

// todo null
// null significa que esta vacio y se la podemos asignar nosotros

let varVacia = null;
console.log(varVacia);

varVacia = "Adrian";
console.log(varVacia);

// =================================================================

// todo undefined

let hola = undefined;
console.log(hola);

// typeof string // booleano // number incorrecto

// ================================================================

// todo cohercion
// comparacion de valores
//buscar mas datos sobre la cohercion
// ! implicito => automatico /// == /// compara el valor

let resultImp = false == "";
console.log(resultImp);
console.log(false == undefined);
console.log(false == null);
console.log("2" === 2); // * "2" ==2 => asi sale true porque compara si el string tiene valor 2 y si es igual al numero 2 // pero "2" === 2 asi sale false porque compara si ambos son de tipo string o numero  

// ! explicito => cambios /// === /// compara el valor y el tipo de dato

let resultExp = false === "";
console.log(resultExp);

// todo OPERADORES

// ? aritmeticos
// suma + //! suma y concatena si son dos string y string y numero
5 + 5 //10

// resta -
5-5 //0

//multiplicacion
5*5 //25

//division /
5 / 5 //1

//modulo % //! es el residuo de la division lo usamos cunado queremos saber si un numero es par
17 % 2 // 1

// exponenciacion **
2 ** 4 //16

// ? GERARQUIA DE LAS OPERACIONES
/*
-PARENTESIS
-POTENCIAS Y RAICES
-MULTIPLICACIONES Y DIVISIONES
-SUMAS
*/

// ? asignacion
// ! = EL SIGNO DE IGUAL ES EL QUE ASIGNA
// ! += ADICION MAS ASIGNACION
// ! -= SUSTRACION MAS ASIGNACION
// ! ++ INCREMENTO DE UNO EN UNO
// ! -- DECREMENTO DE UNO EN UNO

// ? comparacion
// > MAYOR QUE
// < MENOR QUE
// >= MAYOR O IGUAL QUE
// <= MENOR O IGUAL QUE
//  == IGUAL QUE
// != DIFERENTE QUE

// ? logicos
// OR => ||
/**
TRUE || TRUE //TRUE
FALSE || TRUE //TRUE
TRUE || FALSE // TRUE
FALSE || FALSE // FALSE
 */

const nombre = null;
let nombreUsuario;
let sobreNombre = 'adrian';

console.log(nombre || nombreUsuario || sobreNombre);
// ! muestra el valor que de primero true

// AN => &&
// NOT => !
// NULL COALESING => ??