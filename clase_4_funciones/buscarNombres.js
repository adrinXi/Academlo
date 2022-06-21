
// todo BUSCAR NOMBRES CON .toLowerCase

let myNames = 'Adrian';
let myNames1 = 'gerardo';
let myNames2 = 'vaNe';
let myNames3 = 'JosE';
let myNames4 = 'conchita';

function searchName(variablestr) {
    let variosNombres = 'vane grecia adrian gerardo concepcion jose';
    return variosNombres.includes(variablestr.toLowerCase());
}

console.log(searchName(myNames));
console.log(searchName(myNames1));
console.log(searchName(myNames2));
console.log(searchName(myNames3));
console.log(searchName(myNames4));

// ======================================================================

// todo BUSCAR NOMBRES CON .toUpperCase

let misNames = 'concepcion';
let misNames1 = 'lisset';
let misNames2 = 'vane';
let misNames3 = 'gerardo';
let misNames4 = 'jose';
let misNames5 = 'grecia';
let misNames6 = 'adrian';

function buscarNames(vnames) {
    let variosNames = 'VANE GRECIA GERARDO ADRIAN CONCEPCION JOSE';
    return variosNames.includes(vnames.toUpperCase());
}

console.log(buscarNames(misNames));
console.log(buscarNames(misNames1));
console.log(buscarNames(misNames2));
console.log(buscarNames(misNames3));
console.log(buscarNames(misNames4));
console.log(buscarNames(misNames5));
console.log(buscarNames(misNames6));

// ======================================================================