// if palabra resevada
// else palabra resevada
let age = 4;

if (age >= 18) {
    console.log("esto es verdadero");
}else {
    console.log("esto es falso");
}

// let month = 1;
// el orden es if //else if (todos los que se ocupen) //else(para terminar)
// if(month ===1) {
//     console.log("Enero Febrero Marzo Abril");
// }else if(month ===2) {
//     console.log("Mayo Junio Julio Agosto");
// }else(month ===3) {
//     console.log("Septiembre Octubre Noviembre Diciembre");
// }

// EJERCICIOS CLASE MARTES PARA ENTREGAR EL DIA MIERCOLES 8 DE JUNIO
// ============================================================================
// 1.-Usa la sentencia if para ayudar a los clientes de una pizzeria en línea a saber cuanto deben pagar por la pizza que ordenaron.

// las pizzas que tenemos disponibles son:
// 1. Pequeña: $10
// 2. Mediana: $15
// 3. Grande: $20
// 4. Familiar: $25

// let pizza = "mediana";

// if(pizza === "pequeña") { 
//     let precio = 10;
//     console.log(`la pizza ${pizza} tiene un precio de ${precio}`);   
// }else if(pizza === "mediana") {
//     let precio = 15;
//     console.log(`la pizza ${pizza} tiene un precio de ${precio}`);
// }else if(pizza === "grande") {
//     let precio = 20;
//     console.log(`la pizza ${pizza} tiene un precio de ${precio}`);
// }else if (pizza === "familiar") {
//     let precio = 25;
//     console.log(`la pizza ${pizza} tiene un precio ${precio}`);
// }

// console.log(pizza);
// porque si termino en Else me marca un error en donde abro las {}?

// En caso de que el cliente solicite una pizza que no esté disponible, debe mostrar un mensaje indicando que no está disponible
let pizza = "gigante";
// let precio = 25; ya no necesitamos aqui afuera la variable precio porque la declaramos dentro de la condicional

function pricePizza(typePizza) {
    // colocamos las condicionales
    if(typePizza === "pequeña") {
        // quitamos price de los parametros y lo metemos en una variable Let
        let price = 10;
        // estructura del return
        return `la pizza ${typePizza} cuesta $${price}`;
    }else if (typePizza === "mediana") {
        let price = 15;
        return `la pizza ${typePizza} cuesta $${price}`;
    }else if (typePizza === "grande") {
        let price = 20;
        return `la pizza ${typePizza} cuesta $${price}`;
    }else if (typePizza === "familiar") {
        let price = 25;
        return `la pizza ${typePizza} cuesta $${price}`; 
    }else {
        // en este else terminamos la condicional hasta donde nos pide retornar NO DISPONIBLE
        return `la pizza ${typePizza} NO ESTA DISPONIBLE`;
    }
}

// en el console.log llamamos a la funcion y a la variable de afuera para que se muestre en la consola
console.log(pricePizza(pizza));
// ============================================================================
// 2.- Transforma la siguiente sentencia if en una condicional ternaria.
// puedes usar los operadores lógicos &&, || y los operadores de comparación ===, !=, >, <, >=, <=

const hora = 4;
let saludoPorHora;

if (hora >= 4 && hora <= 12) {
    saludoPorHora = "Buenos dias";
}else if (hora > 12 && hora <= 18) {
    saludoPorHora = "Buenas tardes";
}else {
    saludoPorHora = "Buenas noches";
}

console.log(saludoPorHora);

// aqui mi codigo

// let horaSaludo = 19;

// let saludoPorHora2 = horaSaludo >= 4 ? "Buenos Dias" :
//                     horaSaludo < 12 ? "Buenos Dias" :
//                     horaSaludo > 12 ? "Buenas Tardes" :
//                     horaSaludo < 18 ? "Buenas Tardes" :
//                     horaSaludo > 18 ? "Buenas Noches" :
//                     horaSaludo < 4 ? "Buenas Noches":
//                     "otro numero";

// console.log(horaSaludo, saludoPorHora2);

// ============================================================================
// 3.- Crea una función que reciba como parámetro un string con un nombre del mes
// y debe retornar un string que indique la estación del año correspondiente. Si el mes no es válido, debe retornar "Mes no válido"
let month = "Abril";
// let station;

function stationYear(month) {
    if (month == "Enero" == "Febrero") {
        let station = "Invierno";
        return `La estacion de año es ${station}`;
    }else if (month = "Marzo" == "Abril") {
        let station = "Primavera";
        return `La estacion del año es ${station}`;
    }
}

console.log(stationYear(month));
// ============================================================================
// 4.-Crea una función que retorne verdadero si el número recibido por parámetro es par y falso si es impar.



// ============================================================================
// 5.-Crea una función que realice la siguiente operación: si recibe un número mayor a 10, 
// retorne ese número, si no, retorne el doble del número recibido

let num = 10;

function operation(params) {
    
}