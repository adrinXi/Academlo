//  ? string;

//  1   2   3   4   5   6   7   8   9   10  ==> LONGITUD
// "H" "O" "L" "A" " " "M" "U" "N" "D" "O"  ==> STRING
//  0   1   2   3   4   5   6   7   8   9   ==> POSICIONES

let str = "hola mundo";

console.log(str.length);
// para ingresar a la posicion es de esta manera (opciones abajo)
console.log(str[9]);
// para ingresar a la ultima posicion del string
console.log(str[str.length -1]);


//  ? array;
// es una varible que tiene adentro mas valores
// son iterables

// asi se declara un array
// los valores dentro de los arrays se pueden repetir
// const myArray = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

const myArray = [1, 2, 3, 4, 5];

// asi accedemos a las posiciones de los array
console.log(myArray[2], "posicion");
// asi accedemos a la longitud de array
console.log(myArray.length, "longitud");

// para mostrar todos los valores que tiene un array lo hacemos con un For
// inicializamos la variable let i = 0; para que nos muestre el string desde la posicion 0
// i <= myArray.length; para que nos muestre los valores que existan desde la posicion cero
// i++ para que vaya sumando de uno en uno los valores del arreglo
for (let i = 0; i < myArray.length; i++) {
    console.log(i + " ==> Posicion " + myArray[i] + " ==> valor");
}

const arrayNames = ["Vanessa", "Grecia", "Adrian", "Gerardo", "Concepción", "José"];

// for(let i = 0; i < arrayNames.length; i++) {
//     console.log(arrayNames[i]);
// }

// asi accedemos a la longitud del array
console.log(arrayNames.length);
// asi accedemos a las posiciones del arreglo
console.log(arrayNames[2]);
console.log(arrayNames[1]);
console.log(arrayNames[5]);
console.log(arrayNames[3]);
console.log(arrayNames[4]);
console.log(arrayNames[0]);

// asi se inserta otro valor a los arrays
arrayNames.push("Lisset");
console.log(arrayNames);

// con .pop se elimina el ultimo valor en la lista de los arrays
// arrayNames.pop();
// cuando se elimina se puede guardar en una variable (se elimina el ultimo)
const delateNames = arrayNames.pop();
console.log(delateNames, " Nombre eliminado");
console.log(arrayNames);

// para eliminar al primero de las posiciones en los arrays
arrayNames.shift();
console.log(arrayNames);

// para eliminar valores a nuestro libre deseo
console.log(arrayNames.slice(1, 2));
// se puede hacer con el .splice pero elimina de la posicion que indicamos hacia atras nunca hacia enfrente con un solo valor
console.log(arrayNames.splice(3));

// para agregar en una posicion en especifico ...queda pendiente por investigar

// const arregloNombres = ["Vanessa", "Grecia", "Adrian", "Gerardo", "Concepción", "José"];

// for (let i = 0; i < arregloNombres.length; i++) {
//     const element = array[index];
// }