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
