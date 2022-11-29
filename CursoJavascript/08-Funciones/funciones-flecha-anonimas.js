//* Funciones tipo flecha - funciones anónimas

const array = [1, 2,6, 7, 8, 4, 3]

const array2 = array.map((valor) => valor * 2)

console.log(array2);

const dobleDelValor = valor => valor * 2

const array3 = array.map(dobleDelValor)

console.log(array3);

function doble(valor) {
  return valor * 2
}