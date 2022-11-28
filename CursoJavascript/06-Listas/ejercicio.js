const listaCompra = [
  "arroz",
  "huevos",
  "plátanos",
  "fresas",
  "arándanos",
  "leche",
];

listaCompra.push("Aceite de Girasol");

listaCompra.pop();

const listaPelisFav = [
  {
    titulo: "Your name",
    director: "Makoto Shinkai",
    fecha: new Date("August 26 2016"),
  },
  {
    titulo: "Burbujas",
    director: "Tetsuro Araki",
    fecha: new Date("May 13 2022"),
  },
  {
    titulo: "Amor de gata",
    director: "Junichi Sato",
    fecha: new Date("June 18 2020"),
  },
];

const newLista = listaPelisFav.filter(
  (obj) => obj.fecha > new Date("January 1 2010")
);

const listaDirectores = listaPelisFav.map(obj => obj.director);

listaTitulo = listaPelisFav.map(obj => obj.titulo)

const newLista2 = listaDirectores.concat(listaTitulo);

const newLista3 = [...listaDirectores, ...listaTitulo];