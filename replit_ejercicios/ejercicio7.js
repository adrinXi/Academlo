// todo Ejercicio 7

/**
 Elimina un usuario del arreglo

La función deleteUser() recibe 2 parámetros:

users: Un arreglo de usuarios
email: Un correo
Tu labor es encontrar en el arreglo users al usuario que tenga el correo recibido y eliminarlo, finalmente tienes que usar return para devolver el arreglo users sin el usuario eliminado.

Ejemplo: Recibimos los siguientes parámetros

  
users = [{ name: 'Erik', email: 'erik@academlo.com' }, { name: 'Georg', email: 'georg@academlo.com' }, { name: 'Andrea', email: 'andrea@gmail.com' }];
    
email = "erik@academlo.com"

El arreglo que debemos retornar es:

  
[{ name: 'Georg', email: 'georg@academlo.com' }, { name: 'Andrea', email: 'andrea@gmail.com' }]

Ya que eliminamos el al usuario con el correo "erik@academlo.com".
 */

let users = [{ name: 'Erik', email: 'erik@academlo.com' }, 
             { name: 'Georg', email: 'georg@academlo.com' }, 
             { name: 'Andrea', email: 'andrea@gmail.com' }
            ];
    
email = "georg@academlo.com"

function deleteUsers(users = [], email = "") {
    
    // ! en js es necesario inicializar las variables para que no tengamo un undefined
    let indexObject = 0;

    for(let i = 0; i < users.length; i++) {

        if(users[i].email === email) {
            
            indexObject = i;

        }
    }
    // ! .splice elimina un elemento de nuestro arreglo
    users.splice(indexObject, 1);

    return users;
}

console.log(deleteUsers(users, email));

// * slice no modifica a mi vector original
// * siempre me devuelve una parte declarada del vector


