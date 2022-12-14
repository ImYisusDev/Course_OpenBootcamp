//* Métodos de cadenas de texto (parte 2)

let input = "Escorpio";
let db = "escorpio";

/// toLowerCase() - toUpperCase()

console.log(input.toLowerCase());
console.log(input.toUpperCase());


console.log(input.toLowerCase() === db.toLowerCase());
console.log(input.toUpperCase() === db.toUpperCase());


//? Concatenar dos cadenas de caracteres
let str_1 = "Hola yo soy la primera cadena.";
let str_2 = "Y yo soy la segunda cadena";

console.log(str_1.concat(" ", str_2));
console.log(str_1 + " " + str_2);
console.log(`${str_1} ${str_2}`);


//? Eliminar espacios al inicio y al final

let str_3 = "   Hola soy un string con espacios al final.   "

console.log(str_3.length);

console.log(str_3.trim().length) // para los espacios del inicio y del final
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);


//? Obtener el caracter conociendo su posición

let str_4 = "Hola soy el string número 4";

console.log(str_4.charAt(5));
console.log(str_4[5]);


//? Obtener la posición de una palabra dentro de una cadena de caracteres

let str_5 = "Hola soy Jesús y me gusta el surf. Mi nombre es Jesús y mi apellido Rojas";

console.log(str_5.indexOf("Jesús"));
console.log(str_5.charAt(9));
console.log(str_5.lastIndexOf("Jesús"));