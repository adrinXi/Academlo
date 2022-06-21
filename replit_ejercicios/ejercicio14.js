/**
 Sumando números pares en un rango

La función sumEvens() recibe como parámetros dos números:

Tu labor es sumar todos los números pares que se encuentren en el rango de los números recibidos, sin incluir a los dos números recibidos.

Ejemplo:
Si tu función recibe 20 y 30 deberías retornar 100, ya que los números pares entre 20 y 30 son 22, 24, 26, 28 y la suma de todos estos números es 100.

*Recuerda utilizar return para devolver tu solución.
*El segundo número recibido siempre será mayor al primero.
 */

function sumEvens(inicio, fin) {
    
    let resultado = 0;

    for(let i = inicio + 1; i < fin; i++) {

        // ! por formula numero %2 === 0, ese numero es par, en caso de que no de cero lo detecta como un numero par
        if(i%2 === 0) {
        resultado += i;
        }
    }
    return resultado;
}

console.log(sumEvens(2,10)); // 4+6+8=18

// todo Operador modulo

// !si la operacion dividir en modulo, retorna 0 es un numero par, caso contrario es inpar

// console.log(3%2);