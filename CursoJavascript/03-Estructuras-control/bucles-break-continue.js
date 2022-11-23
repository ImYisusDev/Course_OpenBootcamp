// * BUCLES CON BREAK Y CONTINUE

let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++) {
  
  if (lista[i] === 3) {
    continue;
  }

  console.log(lista[i]);

  if (lista[i] > 5) {
    break;
  }
}


//* Ámbitos de un bucle
/// let nos permite definir variables que solo se puedan usar dentro del ámbito de un bucle y no se use también fuera de este ámbito