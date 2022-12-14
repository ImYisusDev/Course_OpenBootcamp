// * BUCLES

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let lista = [1, 4, 6, 2, 7, 10, 12];

for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}


// ? Estructura for .. of

for (let valor of lista) {
  console.log(valor);
}

//? Estructura forEach

lista.forEach(valor => {
  console.log(valor)
})

let persona = {
  nombre: "Jesus",
  apellido: "Rojas",
  edad: 18,
  isDeveloper: true,
}
console.log(persona.nombre);

let prop = "edad"; // para acceder a una propiedad a través de una variable hay que hacerlo como si fuera un array
console.log(persona[prop])


for (let propiedad in persona) {
  console.log(propiedad);
  console.log(persona[propiedad])
}