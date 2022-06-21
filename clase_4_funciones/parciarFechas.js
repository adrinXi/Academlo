
// todo Parciar fechas

let nacimientoFecha= '25041991';

function parseFecha(date) {
    let day = date [0] + date [1];
    let month = date [2] + date [3];
    let year = date [4] + date [5] + date[6] + date[7];
    let completo = `${day}/${month}/${year}`;

    return completo;
}

console.log(parseFecha(nacimientoFecha));

// ==========================================================

let nacimiento2 = '09082012';

function parciarDate(number) {
    let dia = number.slice(0, 2);
    let mes = number.slice(2, 4);
    let anio = number.slice(4, 8);

    return `${dia}/${mes}/${anio}`;
}

console.log(parciarDate(nacimiento2));

// ==========================================================

let nacimiento3 = '11011991';

function parciarDates(num) {
    let day1 = num [0] + num [1];
    let month1 = num [2] + num [3];
    let year1 = num [4] + num [5] + num [6] + num [7];

    return day1 + '/' + month1 + '/' + year1;
}

console.log(parciarDates(nacimiento3));

// ===========================================================

let nacimiento4 = '30101968';

function fechasDates(numero) {
    let dayOne = numero.slice(0, 2);
    let monthOne = numero.slice(2, 4);
    let yearOne = numero.slice(4, 8);

    return `${dayOne}/${monthOne}/${yearOne}`;
}

console.log(fechasDates(nacimiento4));

// ============================================================

let nacimiento5 = '07121948';

function cumpleFun(num) {
    let dayTwo = num [0] + num [1];
    let monthTwo = num [2] + num [3];
    let yearTwo = num [4] + num [5] + num[6] + num[7];

    let complete = `${dayTwo} / ${monthTwo} / ${yearTwo}`;
    return complete;
}

console.log(cumpleFun(nacimiento5));

// ============================================================

// todo PARCIANDO FECHAS POR AÑO CON .SLICE

let nacimiento6 = '19450425';
let nacimiento7 = '19481207';
let nacimiento8 = '19681030';

function lastDay(numeros) {
    let yearThree = numeros.slice(0, 4);
    let monthThree = numeros.slice(4, 6);
    let dayThree = numeros.slice(6, 8);

    let totalYear = `${yearThree}/${monthThree}/${dayThree}`;
    return totalYear;
}

console.log(lastDay(nacimiento6));
console.log(lastDay(nacimiento7));
console.log(lastDay(nacimiento8));

// =============================================================

let fecha10 = '20120809';
let fecha11 = '19910425';
let fecha12 = '19481207';

function presentHappy(numeros) {
    let year4 = fecha10 [0] + fecha10 [1] + fecha10 [2] + fecha10 [3];
    let month4 = fecha10 [4] + fecha10 [5];
    let day4 = fecha10 [6] + fecha10 [7];
    let happyBirtaday = `${year4}/${month4}/${day4}`;

    return happyBirtaday;
}

console.log(presentHappy(fecha10));

// =============================================================