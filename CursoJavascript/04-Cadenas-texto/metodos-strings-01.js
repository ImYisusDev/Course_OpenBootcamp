//* Métodos más utilizados con cadenas de caracteres

//? Como obtener la longitud de un string
let str = "Hola soy un string";
console.log(str.length);


//? Obtener partes de cadenas de caracteres
/// slice() substring() substr()
let slice_str = str.slice(5, 10);
console.log(slice_str);

let substring_str = str.substring(5, 10);
console.log(substring_str);

let substr_str = str.substr(5, 10);
console.log(substr_str);


//? Reemplazar parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es Jesús";
console.log(cadena);

// replace solo reemplaza la primera instancia
console.log(cadena.replace('Jesús', 'Eduardo'));

// Al utilizar la expresión regular /g (global), reemplaza todas las instancias

let texto = "Veniam labore veniam dolore veniam ex ex in voluptate Lorem veniam Lorem. Cillum dolore minim amet irure exercitation consectetur. Nisi non dolor est et dolor mollit est aliquip est eu consequat excepteur ullamco sint. Voluptate commodo adipisicing sunt in eiusmod consectetur aliqua. Ullamco ullamco exercitation in voluptate eu consectetur in laborum anim."

console.log(texto.replace(/Lorem/g, 'patata'));

