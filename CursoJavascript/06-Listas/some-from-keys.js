/// .some()

const array = [1, 3, 6, 5, 7, 7, 4, 6, 355, -2, 443];

const res = array.some(valor => valor < -0);

console.log(res);

const existe = array.some(valor => valor === 1)

console.log(existe);


const listaObjetos = [
  { nombre: "Lei", edad: 34},
  { nombre: "Gor", edad: 35},
  { nombre: "Miguel", edad: 28},
  { nombre: "Lucia", edad: 32},
  { nombre: "Tamara", edad: 24}
];

const existeMiguel = listaObjetos.some(persona => persona.nombre === "Tamara")

console.log(existe);


//? Como obtener una lista a partir de un objeto iterable

const str = "Hola soy Jesús";
console.log(str[3]);


const ar_str = Array.from(str);
console.log(ar_str);

const set = new Set([2, 3, 'hola', 4])
const ar_set = Array.from(set)
console.log(ar_set);


const keys = array.keys()
console.log(keys);

const ar_key = Array.from(keys);
console.log(ar_key);