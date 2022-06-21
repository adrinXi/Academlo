// todo Ejercicio 6

let datos1 = [
    {name:'Adrian', email:'adrian@academlo.com', age:31},
    {name:'Vane', email:'vane@academlo.com', age:29},
    {name:'Grecia', email:'grecia@academlo.com', age:9}
]

function getEmails(personas = []) {
    let email = [];

    for(let i = 0; i < personas.length; i++) {
        // ! .push es para añadir informacion a la variable que esta vacia en la funcion, la variable que usamos como auxiliar
        email.push(personas[i].email);
    }
   
    return email;
}

console.log(getEmails(datos1));