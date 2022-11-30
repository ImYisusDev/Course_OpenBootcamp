// localStorage.setItem("nombre", "Jesús")
// localStorage.setItem("nombre", "Miguel")

// console.log(localStorage.getItem("nombre"));

// JSON.stringify -> Convierte un objeto/array en un string
// localStorage.setItem("persona", JSON.stringify({nombre: "Jesús", edad: 16}))

// JSON.parse -> Convierte un objeto/array convertido a través de stringify en un objeto de Javascript
// console.log(JSON.parse(localStorage.getItem("persona")));

localStorage.removeItem("nombre");

sessionStorage.setItem("nombre-sesión", "Jesús")

/* Cookies */

document.cookie = "nombreCookie=JesusCookie"

document.cookie = "NombreCaducidad=Nombre;expires=" + new Date(2023, 0, 1).toUTCString()

console.log(document.cookie);