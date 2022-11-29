function returnTrue() {
  return true;
}

/// Función asíncrona

async function hola() {
  return setTimeout(() => console.log("Hola soy una promesa"), 5000);
}
hola();

/// Función generadora

function* generarIdPares() {
  let id = 0;
  while (true) {
    yield (id += 2);
  }
}
