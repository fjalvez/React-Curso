//Arreglos en JS

//const arreglo = new Array(100);

const arreglo = [1,2,3];

// arreglo.push(1);
// arreglo.push(2);

let arreglo2 = [ ...arreglo, 4];

// Recorre cada elemento del arreglo2 y lo multiplica por 2 y lo inserta en el arreglo3
const arreglo3 = arreglo2.map( function(numero) {
  return numero * 2;  
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
