//* Métodos de cadenas de texto (parte 3)

//! http://regexr.com

let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

console.log(texto_largo.match(/no/g));

// Para buscar si una palabra existe dentro del texto
console.log(texto_largo.includes("prefiere"));

// Para saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("Tito"));

// Para saber si un texto termina con una palabra
console.log(texto_largo.endsWith("árboles."));