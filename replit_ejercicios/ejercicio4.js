// todo Ejercicio num4

/*
Suma los elementos de un arreglo

La función sumValues() recibe como parámetro un arreglo con 3 elementos de tipo Number, tu labor es tomar los 3 valores 
y sumarlos, en esta ocasión tendrás que hacer que la función sumValues los retorne utilizando return.

Ejemplo: Si el array que recibe es [1, 2, 3], deberás utilizar return para devolver 6 
que es la suma de todos los elementos.
*/

let vector1 = [1, 2, 3];

// !en js las variables se definen con el valor que se le otorga
let variable1 = [];

// !los paramentros son variables que se usan o no en una funcion, y esta esta declarada en la funcion
// ! array = [] se define asi el parametro para que solo tome datos de tipo array
function sumValues(array = []) {
    let suma = 0;

    for(let i = 0; i < array.length; i++) {
        // * suma += array[i] (buscar explicacion logica y ponerla aqui)

        // *El operador de asignación de suma (+=) suma el valor del operando derecho a una variable y asigna 
        // *el resultado a la variable. Los tipos de los dos operandos determinan el comportamiento del operador
        // * de asignación de suma. Es posible la suma o la concatenación
        suma += array[i];
    }
    // ! el return siempre va en la funcion
    return suma;
}

// console.log(sumValues(vector1));

// *sintaxis de numeros====================================================================================

let varInt1 = 25;
let varFloat1 = 7.14;
let varInt = 7;
let varFloat = 3.64;

let suma1 = 45 + varInt;
let rest1 = 7 - varFloat1;


console.log(suma1);
console.log(rest1);
console.log(parseInt(rest1)); //! parseInt para pasar el numero float a un numero entero
console.log(typeof varFloat);

// * PRACTICAS=============================================================================================


const pNumeros = [10, 20, 30];

function sumaDeNumeros(numbers = []) {
    
    let sumResult = 0;

    for(let i = 0; i < numbers.length; i++) {
        sumResult += numbers[i];
    }
    return sumResult;
}

console.log(sumaDeNumeros(pNumeros));

// * PRACTICAS=============================================================================================

const pNumeros5 = [45, 34, 98, 46, 90];

function sumPnumeros5(numberos = []) {
    
    let sumValues = 0;

    for(let j = 0; j < numberos.length; j++) {
        sumValues += numberos[j];
    }
    return sumValues;
}

console.log(sumPnumeros5(pNumeros5));

// * PRACTICAS=============================================================================================