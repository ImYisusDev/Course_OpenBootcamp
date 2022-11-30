const nombre = "Jesús";
const apellido = "Rojas";

const obj = {
  nombre,
  apellido
}

// sessionStorage.setItem("objeto", JSON.stringify(obj))

// localStorage.setItem("objeto", JSON.stringify(obj))



const fechaExpira = new Date(new Date().getTime() + 120000)

// document.cookie = `nuevaCookie=${JSON.stringify(obj)};expires=${fechaExpira.toUTCString()}`