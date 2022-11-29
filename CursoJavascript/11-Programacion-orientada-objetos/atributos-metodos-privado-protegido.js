class Persona {
  //? Private -> #
  //? Private - Solo se puede acceder desde dentro de la clase
  #nombre;
  #edad;

  //? Protected -> _
  //? Protected - Solo se puede acceder desde dentro de la clase u desde clases descendientes
  _isDeveloper = true;

  constructor(nombre, edad) {
    this.#nombre = nombre;
    this.#edad = edad;
  }

  saludo() {
    console.log(`Hola mi nombre es ${this.nombre}, tengo ${this.edad} años`);
  };

  obtenNombre() {
    return this.#nombre
  }

  getEdad() {
    return this.#edad;
  }

  setEdad(nuevaedad) {
    this.#edad = nuevaedad;
  }
}

const persona = new Persona("Jesús", 20)
// console.log(persona);

// console.log(persona.nombre);
persona.saludo();

console.log(persona.obtenNombre())
// console.log(persona.#obtenEdad);
console.log(persona._isDeveloper);




//? Getter -> métodos que nos permiten obtener atributos/métodos privados o protegidos
const edad = persona.getEdad()
console.log(edad);

//? Setter -> métodos que nos permiten cambiar atributos/métodos privados o protegidos
persona.setEdad(34);
console.log(persona.getEdad());