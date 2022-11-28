//? Como podemos comparar listas

/// .every()
const array = [4, 6, 3, 7, 1, 8, 5, 9, -1, -4, -56, -7]

// const resultado = array.every(valor => {
//   if ( valor > 0) {
//     return true
//   } else { return false }
// })

const resultado = array.every(valor => valor > 0)

console.log(resultado);


//? Comparación de listas

const ar1 = [1, 2, 3, 4]
const ar2 = [1, 2, 3, 4]

console.log(ar1 === ar2);

const compararArray = (array_1, array_2) => {
  if (array_1.length !== array_2.length) return false
  const res = array_1.every((valor, i) => valor === array_2[i])
  return res
}

console.log(compararArray(ar1, ar2));

const ar3 = [1, 2, 3, 6]

console.log(compararArray(ar1, ar3));