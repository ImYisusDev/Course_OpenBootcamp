const miFuncion = (val) => {
  if (typeof val === "number") {
    return 2 * val;
  }
  // return false;
  throw new Error("El valor debe ser de tipo número")
};

// const elDoble = miFuncion("a");

const numero = '8'

try {
  //Código que puede fallar
  console.log("Está ejecutándose de manera correcta");
  const doble = miFuncion(numero);
  console.log(doble);
} catch(e) {
  // En caso de fallar quiero que ejecutes esto
  console.error(e);
  console.error("ERROR!");
} finally {
  console.log("Esto se va a ejecutar siempre");
}

//! InternalError, SyntaxError, TypeError, RangeError y ReferenceErro
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Errors