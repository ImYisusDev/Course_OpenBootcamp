const hoy = new Date();

const fechaNacimiento = new Date(2004, 5, 14);

const isMasTarde = fechaNacimiento > hoy;

const diaFechaNacimiento = fechaNacimiento.getDate();

const mesFechaNacimiento = fechaNacimiento.getMonth() + 1;

const añoFechaNacimiento = fechaNacimiento.getFullYear();