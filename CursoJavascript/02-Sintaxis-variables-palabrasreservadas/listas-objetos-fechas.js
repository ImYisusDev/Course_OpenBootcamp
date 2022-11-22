// Listas, arrays

const lista = [1, "hola", true, null, undefined];
const lista2 = new Array(1, "adios");
const lista3 = new Array(3);


console.log(lista);
console.log(lista2);
console.log(lista3);

// Objetos

const phone = {
  altura: 10,
  anchura: 5,
  marca: "Samsung",
  isWhite: false,
  contactos: [],
  tarjeta: {
    marca: "Claro",
    almacenamiento: 32
  },
  "altura-tarjeta": 5,
}

phone.year = 2019;
phone.marca = "Apple";

console.log(phone.marca);
console.log(phone["altura-tarjeta"]);


// Fechas
// Librerías: Moment.js

const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10); // Utilizando los mili-segundos
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 0, 15);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const año = ahora.getFullYear();

console.log(dia, mes, año);