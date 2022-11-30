function obtenLista(num) {
  let factorial = 1
  let array = []

  for (let i = 0; i < num; i++) {
    if (i < 2) {
      array = [...array, factorial];
    } else {
      factorial += array[i-2];
      array = [...array, factorial];
    }
  }
  return array;
}

const lista = obtenLista(6);
