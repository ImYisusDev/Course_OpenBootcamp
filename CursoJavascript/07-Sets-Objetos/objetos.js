//* Trabajando con objetos

const obj = {
  id: 4,
  nombre: "Juan",
  apellido: "Gonzales",
  isDeveloper: true,
  libros_favoritos: ["El método", "El código de la manifestación"],
  "4-juegos": [1, 2, 3, 4],
}

console.log(obj.id);
console.log(obj["4-juegos"]);

const prop = "isDeveloper";
console.log(obj[prop]);

// En este caso no copia solo el valor del primer objeto sino que también le asigna el mismo espacio de la memoria y por lo tanto los cambios de uno se reflejan en el otro
const obj2 = obj;
console.log(obj2);

obj2.nombre = "Indigo"
console.log(obj2.nombre);

console.log(obj.nombre);

let val1 = 4;
let val2 = val1;

// Para elementos primitivos si hace una copia y crea un nuevo espacio de memoria
val2 = 6;
console.log(val1);
console.log(val2);



const obj3 = { ...obj }

console.log(obj.nombre);
console.log(obj3.nombre);

obj3.nombre = "Rojas"

console.log(obj.nombre);
console.log(obj3.nombre);


//? Cómo ordenar listas de objetos en función de una propiedad

const listaPeliculas = [
  { titulo: "Lo que el viento se llevó", anyo: 1939 },
  { titulo: "Titanic", anyo: 1939 },
  { titulo: "Moana", anyo: 2016 },
  { titulo: "El efecto mariposa", anyo:2004 },
  { titulo: "TED", anyo: 2012 }
]

console.log(listaPeliculas);

/// .sort() -> Muta el valor de la lista original

listaPeliculas.sort((a, b) =>a.anyo - b.anyo)

console.log(listaPeliculas);

