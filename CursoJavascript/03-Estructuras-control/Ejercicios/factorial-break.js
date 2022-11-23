let num = 10;
let factorial = 1;

while (true) {
  if (num <= 1) {
    break;
  } else {
    factorial = factorial * num;
  }
  num--;
}

console.log(factorial);