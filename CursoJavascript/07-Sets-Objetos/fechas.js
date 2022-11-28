//* Trabajando con fechas

const fecha = new Date()

console.log(fecha);


//! Los meses inicializan desde el 0
const fecha2 = new Date(1987, 10)

console.log(fecha2);

// Con mili-segundos
const fecha3 = new Date(0);
console.log(fecha3);


const fecha4 = new Date("October, 13, 1979");
console.log(fecha4);

console.log(fecha < fecha2);

const fecha5 = new Date(1987, 10)

// Para comparar fechas tenemos que convertir fechas a mili-segundos
console.log(fecha2.getTime() === fecha5.getTime());


//? Obtener el día el mes y el año de una fecha

/// .getDate() -> Para obtener el día
console.log(fecha2.getDate());

/// .getMonth() -> Para obtener el mes (0 - Enero, 11 - Diciembre)

console.log(fecha2.getMonth() + 1);

/// .getFullYear() -> Para obtener el año
console.log(fecha2.getFullYear());


/// .toLocaleDateString() 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fecha2.toLocaleDateString("en-GB"));