//* Que son las funciones, como se declaran y como se utilizan

const nom = "Jesús"

// saludar("Jesús");
saludar(nom);

function saludar(nombre) {
  console.log( `Hola ${nombre}`);
};

///

let nombre_2 = "Juan";

despedir(nombre_2);

function despedir(nombre) {
  nombre = "Diego"
  console.log(`Adiós ${nombre}`)
}

///

let persona = {
  nombre: "Juan",
  apellido: "Gonzales",
}

saludarPersona(persona);

function saludarPersona(objeto) {
  objeto.apellido = "Villar"
  console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
}

saludar();

/// 

function imprimirNumero(numero = 7) { // Parámetros por defecto
  console.log(numero);
}

imprimirNumero()

///

function imprimir(...parametros) {
  console.log(parametros);
}

imprimir(1, 2, 3, 4, 5)


///

function suma(...nums) {
  return nums.reduce((a, b) => a+b)
}

const s = suma(1, 2, 3, 3, 50);

console.log(s);


///

function multiplicar(a = 0, b = 0) {
  return a * b;
}

console.log(multiplicar(2, 6));