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
