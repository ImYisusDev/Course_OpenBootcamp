const persona = {
  nombre: "Jesús",
  edad: 20,
  isDeveloper: true,
  saludo: function() {
    console.log("Hola");
  }
}

// console.log(persona);
persona.saludo();

const otra_persona = {
  nombre: "Miguel",
  edad: 15,
  isDeveloper: false,
  saludo: function() {
    console.log('Hola');
  }
}

otra_persona.saludo();


//? Factory function
const creaPersona = (nombre, edad, isDeveloper) => {
  return {
    nombre, // nombre: nombre,
    edad,
    isDeveloper,
    saludo: function() {
      console.log("Hello");
    }
  }
}

const nueva_persona = creaPersona("Juan", 25, true)
console.log(nueva_persona);

