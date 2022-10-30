"use strict"

//FUNCIONES FLECHA
//let func = (arg1, arg2, ..., argN) => expression;

//Versión larga
/*let func = function(arg1, arg2, ..., argN) {
    return expression;
  };*/

let sum = (a, b) => a + b;
/* Esta función de flecha es una forma más corta de:
let sum = function(a, b) {
  return a + b;
};
*/
alert(sum(1, 2)); // 3

let double = n => n * 2;
// Más o menos lo mismo que: let double = function(n) { return n * 2 }
alert( double(3) ); // 6

let sayHi = () => alert("¡Hola!");
sayHi();

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('¡Hola!') :
  () => alert("¡Saludos!");

welcome();


let suma = (a, b) => {  // la llave abre una función multilínea
    let result = a + b;
    return result; // si usamos llaves, entonces necesitamos un "return" explícito
  };
  
  alert( suma(1, 2) ); // 3