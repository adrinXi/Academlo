const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ];

function contarOvejas(ovejas) {
    
    let misOvejas = [];
    let nameOvejas = [];

    for(let i = 0; i < ovejas.length; i++) {
        misOvejas.push(ovejas[i].name);
        nameOvejas.includes(misOvejas[i].name === ovejas[i].name);
    }
    return nameOvejas;
}

  console.log(contarOvejas(ovejas));