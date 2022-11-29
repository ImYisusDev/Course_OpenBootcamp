//* Carga y sobrecarga de funciones

function saludar() {
  hola()
}

function hola() {
  console.log("Hola, soy la función hola()");
}

saludar()

/// 1. global()
/// 2. saludar() global()
/// 3. hola()
/// 4. saludar() global()
/// 5. global()

// function recursive() {
//   recursive()
// }

// recursive()