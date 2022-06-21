/**
 * 
 * Cuenta las veces que se repite una letra

La función countLetter() recibe como parámetros dos strings:

El primer string es una frase cualquiera.

El segundo string es una letra cualquiera.

Tu labor es encontrar cuántas veces se repite la letra en el string.

Ejemplo:
Si tu función recibe como frase "Hola, me llamo Erik" y como letra "a" debes retornar 2, ya que la letra "a" se encuentra 2 veces en la frase.

*Recuerda utilizar return para devolver tu solución.
*Tu solución debe de funcionar para cualquier frase y cualquier letra.
 */

function countLetter(phrase, letter) {
    
    let cont = 0;

    for(let i = 0; i < phrase.length; i++){

        if(phrase[i] === letter) {
            cont ++;
        }
    }
    return cont;
}

console.log(countLetter('hola me llamo erick', 'k'));