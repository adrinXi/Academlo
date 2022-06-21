
// !..splice
// * splice = es un slice in a place

let autos = [ 
    {marca: 'toyota', color: 'fris', precio: '50000'},
    {marca: 'ford', color: 'blanco', precio: '60000', ouner:'juan'},
    {marca: 'nissan', color: 'rojo', precio: '35000', ouner:'´pedro', peso: 1.7},
]

// *splice tiene 2 tareas
// !eliminar elementos
// !agregar elementos

// autos.splice(1,1);

// console.log(autos);

// !de esta manera agregamos un abjeto mas al arreglo (posicion, elementos a eliminar, objeto o elemento a agregar)
autos.splice(2,0, {marca: 'VW', color: 'negro', precio: '95000', ouner:'adrian', peso: 8.7});

console.log(autos);