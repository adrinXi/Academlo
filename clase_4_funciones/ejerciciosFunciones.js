// 
let varGlobal = "Hola yo soy de: ";

function miFuncion(){
    let varLocal = "México - CDMX";

    return varGlobal + "-" + varLocal;
}

console.log(miFuncion());