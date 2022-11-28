//* Strings (cadenas de caracteres)

let str_sng = 'Hola soy un texto con comillas simples'
let str_dbl = "Hola soy un texto con comillas dobles";


console.log(str_sng);
console.log(str_dbl);

let str_comillas = "El otro dia me dijo literalmente \"ve a sacar la basura\"";
let str_comillas_simples = "El otro dia me dijo literalmente 've a sacar la basura'";


//? Comillas invertidas (backticks)
let str_backticks = `Hola esto es un string con backticks`;

console.log(str_backticks);

let nombre = "Jesús";
let saludo = `Hola, ${nombre} bienvenido`;

console.log(saludo);

//? Plantillas HTML
let plantilla = `
<html>
  <h1>Título</h1>
  <p>Este es un párrafo</p>
</html>`

console.log(plantilla);


//? Introducción de variables en HTML

let libros = ["Empieza por el por qué", "El monje que vendió su Ferrari", "El poder del ahora"];