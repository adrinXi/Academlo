// todo Ejercicio 5

/*
Obtén el correo de un usuario

La función getEmail() recibe como parámetro un objeto con las propiedades email y age, 
tu labor es obtener el correo y retornarlo utilizando return.

Ejemplo: Si el objeto que recibe es
{ name: "Erik", email: "erik@academlo.com" }
deberás utilizar return para devolver "erik@academlo.com".
*/

let persona = { name: "Erik", email: "erik@academlo.com" }

function getEmail(persona) {
    
    return persona.email;
}

console.log(getEmail(persona));

// * PRACTICAS ====================================================================================

/*
Obtén el correo de un usuario

La función getEmail() recibe como parámetro un objeto con las propiedades email y age, 
tu labor es obtener el correo y retornarlo utilizando return.

Ejemplo: Si el objeto que recibe es
{ name: "Erik", email: "erik@academlo.com" }
deberás utilizar return para devolver "erik@academlo.com".
*/

const varEmails = { name: "Vane", email: "vanerm@academlo.com" };

function vamosEmail(str = "") {
    return str.email;
}

console.log(vamosEmail(varEmails));
// console.log(varEmails.email);

// * PRACTICAS ====================================================================================

const varEmails1 = [
    { name: "Vane", email: "vanerm@academlo.com" },
    { name: "Grecia", email: "greciavi@academlo.com" },
    { name: "Adrian", email: "advill@academlo.com" },
    { name: "Lisset", email: "lissrm@academlo.com" }
];

function devNombre(email = "") {

    let correos = [];

    for(let i = 0; i < email.length; i++) {
        correos.includes(email[i].email);
    }
    return correos.js
}

console.log(devNombre(varEmails1));