// todo Ejercicio 9

// * acomodo de menor a mayor

const myArray = [
    { name: 'Georg', email: 'georg@academlo.com', score: 100 },
    { name: 'Andrea', email: 'andrea@gmail.com', score: 70 },
    { name: 'Andrés', email: 'andres@gmail.com', score: 34 }
  ]
  
  function myfn(myArray) {
    return myArray.sort((a,b) => a.score - b.score);
  }
  
  console.log(myfn(myArray));

  // ! .sort ordena de mayor a menor o de menor a mayor
  // !en el orden que le demos en la logica