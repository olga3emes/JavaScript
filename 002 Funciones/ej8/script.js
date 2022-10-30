"use strict"

// Declaración de Función
function sum(a, b) {
    return a + b;
}

// Expresión de Función
let sum = function (a, b) {
    return a + b;
};

//ESTO FUNCIONA
sayHi("John"); // Hola, John
function sayHi(name) {
    alert(`Hola, ${name}`);
}
/*
//Esto NO funciona
sayHi("John"); // error!
let sayHi = function (name) {  // (*) ya no hay magia
    alert(`Hola, ${name}`);
};

let age = prompt("Cuál es tu edad?", 18);
// declarar condicionalmente una función
if (age < 18) {
    function welcome() {
        alert("Hola!");
    }
} else {
    function welcome() {
        alert("Saludos!");
    }
}
// ...usarla más tarde
welcome(); // Error: welcome no está definida


age = 16; // tomemos 16 como ejemplo

if (age < 18) {
    welcome();               // \   (corre)
    //  |
    function welcome() {    //  |
        alert("¡Hola!");    //  |  La declaración de Función está disponible
    }                       //  |  en todas partes del bloque donde está declarada
    //  |
    welcome();              // /   (corre)
} else {
    function welcome() {
        alert("¡Saludos!");
    }
}
// Aquí estamos fuera de las llaves,
// por lo tanto no podemos ver la Declaración de Función realizada dentro de ellas.
welcome(); // Error: welcome no está definida
*/
let age = prompt("Cuál es tu edad?", 18);
let welcome;
if (age < 18) {
    welcome = function () {
        alert("Hola!");
    };
} else {
    welcome = function () {
        alert("Saludos!");
    };
}
welcome(); // ahora ok

/*
let age = prompt("¿Cuál es tu edad?", 18);

let welcome = (age < 18) ?
  function() { alert("¡Hola!"); } :
  function() { alert("¡Saludos!"); };

welcome(); // ahora ok*/