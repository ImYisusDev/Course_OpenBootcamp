//? Cómo trabajar con listas

let var1 = 45;
let array = [1, 2, 3, 4, 5, 6, 7, var1];

console.log(array);


//? Acceder a valores de un array a través de su posición

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);


//? Métodos para introducir nuevos valores en nuestros array

/// .push()  .unshift() => Mutan el valor de nuestro array

// .push() -> Se añaden valores al final
array.push("final", 35, false)
console.log(array);

// .unshift() -> Para añadir valores al inicio
array.unshift("inicio")
console.log(array);


//? Métodos para eliminar valores en nuestros arrays

/// .pop()  .shift() => Mutan el valor del array

const array2 = [1, 2, 3, 'hola', false]

// .pop() -> Valores al final
array2.pop();
console.log(array2);

// .shift() -> Valores al principio
array2.shift();
console.log(array2);


//? Método para eliminar, modificar o añadir valores en nuestro array
/// .splice(x, y)

const array3 = [1, 2, 3, 4, 5, 6, 7];

// Eliminar valores . splice(indice, numValoresAEliminar)
array3.splice(2, 3)
console.log(array3);

// Añadir valores .splice (indice, 0, valores)
array3.splice(2, 0, 'hola');
console.log(array3);

// Modificar valores .splice(indice, 1, valores)
array3.splice(2, 1, 3);
console.log(array3);