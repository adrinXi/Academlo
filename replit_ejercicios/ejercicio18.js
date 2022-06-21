/**
 * Encuentra la cantidad de números individuales que componen a un número

La función countNumbers() recibe como parámetro un número

Tu labor es encontrar y retornar el total de números individuales que lo componen.

Ejemplo:
Si la función recibe el número 128 debemos retornar un 3 porque el número 128 está compuesto por 3 números.

Ejemplo 2:
Si la función recibe el número 84 debemos retornar un 2 porque el número 84 está compuesto por 2 números.

*Recuerda utilizar return para devolver tu solución.
*El número que recibe la función puede ser cualquiera.
 */

function countNumbers(numbers) {
    
    let aux = String(numbers);

    return aux.length;
}

console.log(countNumbers(128));