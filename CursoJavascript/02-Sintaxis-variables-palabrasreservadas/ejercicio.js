
const nombre = "Jesús";
const edad = 18;
const isDesarrollador = true;
const fecha_nacimiento = new Date("February 29 2004");
const libro_favorito = {
  titulo: "El principito",
  autor: "Antoine de Saint-Exupéry",
  fecha: new Date(1943, 3, 6),
  url: "https://www.amazon.com/-/es/Antoine-Saint-exupery/dp/8498381495"
};


const lista = new Array(nombre, edad, isDesarrollador, fecha_nacimiento, libro_favorito);

console.log(lista);