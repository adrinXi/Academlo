/***********************************/
/* Ejercicios con tipos de datos: */
/**********************************/

// Declaración de una variable de tipo number de tipo entero

let wholeNumber = 0;
console.log(typeof wholeNumber);

// Declaración de una variable de tipo number de tipo flotante

let floatNumber = 1.5;
console.log(typeof floatNumber);

/* Colocar el resultado después de cada // */
const nombre = "JS";
let apellido;

console.log(parseFloat("10.5.56")); //11 incorrecto (10.5)
console.log(parseInt("10.5 usd")); //10 correcto

console.log(`Hola ${1}`); //Hola 1 correcto
console.log(`Hola ${"nombre"}`); //Hola nombre correcto
console.log(`Hola ${nombre}`); //error incorrecto (Hola JS)

console.log("Una cadena de texto"[4]); //el indice 4 c correcto
console.log("Una cadena de texto"[0]); //el indice 0 U correcto

console.log("LasQuinceLetras".length); //15 correcto

console.log(1 / 0); // no conteste (infinity) //!indeterminacion
console.log(1 / "dos"); // NaN correcto

console.log(apellido); //va a mostar la varible apellido incorrecto (undefined)

// Convierta la cadena a un número entero
const cadenaEntero = "250px";

console.log(parseInt("250px")); 
console.log(Number.parseInt(cadenaEntero)); // !sintaxis correcta

// Convierta la cadena a un número flotante
const cadenaFlotante = "250.5px";

console.log(parseFloat("250.5px"));
console.log(Number.parseFloat(cadenaFlotante)); // !sintaxis correcta


// Responda las siguientes preguntas:
// 1. ¿Qué tipo de dato es el número negativo?
// !sigue siendo number
// 2. ¿Qué tipo de dato es el número NaN?
// !sigue siendo un number
// 3. ¿Qué tipo de dato es el valor boleano true?
//! es un boolean
// 4. Si una varibale fue declarada con let, pero no se le asignó un valor, ¿qué valor tiene?
//! undefined
// 5. ¿Cual es el tipo de dato que se le conoce como valor vacio o desconocido?
//! null