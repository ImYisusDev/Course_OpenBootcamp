/// .sort() -> Modifica el array

const array = [2, 4, 6, 7, 0, 9, 8]

console.log(array);

array.sort((a, b) => {
  if (a < b) {
    return -1
  } else if (a > b) {
    return +1
  } else { //a === b
    return 0
  }
})

console.log(array);


//? Ordenar únicamente arrays numéricos

const arrayNumerico = [4, 1, 7, 3, 56, 546]

arrayNumerico.sort((a, b) => b - a)

console.log(arrayNumerico);


//? Interesante en arrays de objetos
const listaObjetos = [
  { nombre: "Lei", edad: 34},
  { nombre: "Gor", edad: 35},
  { nombre: "Miguel", edad: 28},
  { nombre: "Lucia", edad: 32},
  { nombre: "Tamara", edad: 24}
]

// listaObjetos.sort((a, b) => {
//   if (a.edad <b.edad) {
//     return -1
//   } else if (a.edad > b.edad) {
//     return +1
//   } else {
//     return 0
//   }
// })

listaObjetos.sort((a, b) => a.edad - b.edad)

console.log(listaObjetos);