console.log("Estoy en operators-control.js");

var userName = "Fabi";
var userLastName = "Tuero";
var userAge = 28;

console.log(userName, userLastName, userAge);

// Operador "+" sirve para dos cosas: concatenar y sumas
// Concatenar: unir dos o mas strings
// Sumar: sumar dos o mas numeros
var userFullName = userName + " " + userLastName;
var userFullNameWithoutSpace = userName + userLastName;

console.log(userFullName);
console.log(userFullNameWithoutSpace);

console.log(
  "Mi nombre es " +
    userName +
    ", mi apellido es " +
    userLastName +
    " y tengo " +
    userAge
);
console.log(
  "Mi nombre es " +
    userName +
    ", mi apellido es " +
    userLastName +
    " y tengo " +
    userAge
);

// Template strings para concatenar, con backticks

console.log(
  `Mi nombre es ${userName}, mi apellido es ${userLastName} y tengo ${userAge} años`
);

var numberOne = 10;
var numberTwo = 20;

var sum = numberOne + numberTwo;

console.log("La suma de " + numberOne + " y " + numberTwo + " es " + sum);

console.log(`La suma de ${numberOne} y ${numberTwo} es ${sum}`);

var substraction = numberOne - numberTwo;
console.log(`La resta de ${numberOne} y ${numberTwo} es ${substraction}`);

var substraction = numberTwo - numberTwo; // -10
console.log(`La resta es ${substraction}`);

var numberThree = 30;
console.log(`La resta es ${substraction}`);

numberThree += 10; // 40
console.log("numberThree", numberThree);

const numberFour = 40;
console.log("numberFour", numberFour);

console.log("numberThree", numberThree);

// Operador de igual debil (==) y operador de igual estricto (===)

// Operadores de mayor y menor
const isGreaterToLeft = 10 > 5;
console.log("isGreaterToLeft", isGreaterToLeft); // true

const isGreaterToRight = 5 < 10;
console.log("isGreaterToRight", isGreaterToRight); // true

const isLessToRight = 10 < 5;
console.log("isLessToRight", isLessToRight); // false

const isLessToLeft = 5 > 10;
console.log("isLessToLeft", isLessToLeft); // false

const isLess = 5 < 10;
console.log("isLess", isLess); // true

const isGreaterOrEqual = 10 <= 10;
console.log("isGreaterOrEqual", isGreaterOrEqual); // true

const isLessOrEqual = 9 <= 10;
console.log("isLessOrEqual", isLessOrEqual); // true

const isLessOrEqual2 = 11 <= 10;
console.log("isLessOrEqual2", isLessOrEqual2); // false

const numberFive = 10;
const numberSix = 20;
console.log("Is numberFive less than numberSix?", numberFive < numberSix); // true
console.log("Is numberSix less than numberFive?", numberSix < numberFive); // false

// Operadores logicos
// AND (&&) compara dos o mas condiciones y devuelve true si todas las condiciones son verdaderas - Pending!
// OR (||) compara dos o mas condiciones y devuelve true si al menos una de las condiciones es verdadera - Pending!
// NOT (!) cambia el valor de una condicion - Pending!
// i.e. !true = false y !false = true

// Operadores condicionales
// Operador condicional if
// if (condicion) { codigo a ejecutar si la condicion es verdadera } (condicion es true)
// Si condition es true, ejecuta el codigo dentro de las llaves y si es false, no ejecuta nada

const isMarriedConditional = false;
if (isMarriedConditional) {
  // Si isMarried es true, ejecuta el codigo dentro de las llaves
  console.log("Esta casado");
}
if (!isMarriedConditional) {
  // Si isMarried es false, ejecuta el codigo dentro de las llaves
  console.log("No esta casado");
}

const ageUser = prompt("Ingresa tu edad");
console.log("ageUser", ageUser);
// TypeOf: devuelve el tipo de dato de una variable
console.log("TypeOf ageUser", typeof ageUser); // string
// Al tipo string lo convierte a tipo number con el metodo Number()
const ageUserToNumber = Number(ageUser);
console.log("TypeOf ageUser", typeof ageUserToNumber); // number

if (ageUserToNumber < 18) {
  console.log("Eres menor de edad. No puedes ingresar");
}
if (ageUserToNumber >= 18) {
  console.log("Eres mayor de edad. Puedes ingresar");
}

// Operador condicional if else
// if (condicion) { codigo a ejecutar si la condicion es verdadera } else { codigo a ejecutar si la condicion es falsa }

if (ageUserToNumber < 18) {
  console.log("Eres menor de edad. No puedes ingresar");
} else {
  console.log("Eres mayor de edad. Puedes ingresar");
}

// Operador condicional if else if
// if (condicion) { codigo a ejecutar si la condicion es verdadera } else if (condicion) { codigo a ejecutar si la condicion es verdadera } else { codigo a ejecutar si la condicion es falsa }

if (ageUserToNumber < 18) {
  console.log("Eres joven");
} else if (ageUserToNumber >= 18 && ageUserToNumber < 80) {
  console.log("Eres adulto");
} else {
  console.log("Eres adulto mayor");
}

console.log("Un codigo que se ejecuta antes del switch");

const expression = "Papayas";
switch (expression) {
  case "Manzanas":
    console.log("No vendemos esta fruta aqui");
    break;
  case "Bananas":
  case "Naranjas":
    console.log("Tenemos Bananas y Naranjas");
    break;
  case "Papayas":
    console.log("Tenemos Papayas");
    // expected output: "Tenemos Papayas."
    break;
  default:
    console.log("Lo siento, no tenemos ${expression}.");
}

console.log("Un codigo que se ejecuta despues del switch");

const fruitUser = prompt(
  "Ingresa tu fruta favorita, 1. Manzanas, 2. Bananas, 3. Naranjas, 4. Papayas"
);
console.log("fruitUser", fruitUser, typeof fruitUser);

const animal = "cat";

if (animal === "cat" || animal === "dog") {
  console.log("This animal is a cat or a dog");
} else {
  console.log("This animal is not a cat or a dog");
}
// Condicional ternario (condicion) ? true : false
// Analiza una condition y si es true, devuelve el valor de la izquierda, si es false, devuelve el valor de la derecha
// Para simplificar el codigo, ECMA6 implementa los operadores "?" y ":" para reemplazar el if else

// condicion '?' true : false

animal === "cat" || animal === "dog"
  ? console.log("This animal is a cat or a dog")
  : console.log("This animal is not a cat or a dog");

console.log("Antes del ciclo de iteracion while");

// Ciclo - Bucle - Iteracion - Loop
// While cycle
// El ciclo while ejecuta un bloque de codigo mientras una condicion sea verdadera

let countWhile = 10;
while (countWhile < 20) {
  console.log("Contador", countWhile);
  // Se genera un loop infinito si no se incrementa el contador
  countWhile++;
}

console.log("Despues del ciclo de iteracion while");

// Do while cycle

let countDoWhile = 10;
do {
  console.log("Contador", countDoWhile);
  countDoWhile++;
} while (countDoWhile < 20);

console.log("Despues del ciclo de iteracion Do while");

// For cycle
// El ciclo for se ejecuta un numero determinado de veces mientras una condicion sea verdadera

console.log("Antes del ciclo de iteracion for");

let countFor = 10;

// i++ reemplaza a countFor = countFor + 1

for (i = 0; i <= countFor; i++) {
  console.log("Iniciatec");
}

for (let i = 0; i < countFor; i++) {
  // console.log("Contador", i);
  console.log(`l valor del contador es ${i}`);
}

console.log("Despues del ciclo de iteracion for");

// For in an array
const arrayToFor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arrayToFor.length; i++) {
  console.log("Usando la longitud del array");
}

for (let i = 0; i < arrayToFor.length; i++) {
  console.log(
    `El valor del indice del elemento es ${i} y el valor del elemento es ${arrayToFor[i]}`
  );
}

let fruitsArray = ["Manzanas", "Bananas", "Naranjas", "Papayas"];

for (let i = 0; i < fruitsArray.length; i++) {
  console.log(
    `El valor del indice del elemento es ${i} y el nombre de la fruta es ${fruitsArray[i]}`
  );
}

const dataUsers = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "bret@leanne.com",
  },
];

for (let i = 0; i < dataUsers.length; i++) {
  console.log("dataUsers", dataUsers[i].name);
}
