const yo = {
  nombre: "Jesús",
  apellido: "Rojas",
  edad: 18,
  altura: 170,
  eresDesarrollador: true,
};

const edad = yo.edad;

const lista = [
  yo,
  {
    nombre: "Gerson",
    apellido: "Arteaga",
    edad: 18,
    altura: 173,
    eresDesarrollador: false,
  },
  {
    nombre: "Franco",
    apellido: "Díaz",
    edad: 18,
    altura: 180,
    eresDesarrollador: true,
  },
];

const listaOrdenada = lista.sort((a, b) => b.edad - a.edad)
