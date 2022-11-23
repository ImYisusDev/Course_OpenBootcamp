// * Comparaciones

// ? Igualdad
if (5 == 5) {
  console.log("5 es igual a 5")
}

if (5 === 5) {
  console.log("5 es muy igual a 5")
}

let a = 5;
console.log(typeof a);
let b = "5";
console.log(typeof b);

// == solo compara el valor
if (a == b) {
  console.log("a es igual a b - Débil")
}

// === compara el valor y el tipo
if (a === b) {
  console.log("a es igual a b - Fuerte")
}

let c = 4;
let d = 10;

// != compara que sean diferentes en valor
if (c != d) {
  console.log("c es diferente a d - Débil")
}

// !== que sea diferentes en valor o en tipo
if (c !== d) {
  console.log("c es diferente a d - Fuerte")
}


// ? Comparaciones mayor que y menor que
let max = 10;
let min = 5;

if (max > min) {
  console.log("max es mayor que min")
}
if (max >= min) {
  console.log("max es mayor e igual que min")
}

if (min < max) {
  console.log("min es menor que max")
}
if (min <= max) {
  console.log("min es menor e igual que max")
}