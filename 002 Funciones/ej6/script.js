"use strict"


function sayHi() {   // (1) crea
    alert("Hola");
}

let sayHi = function () { // (1) crea
    alert("Hola");
};

alert( sayHi ); // muestra el código de la función

function sayHi() {           // (1) crear
    alert( "Hola" );
  }
  let func = sayHi;         // (2) copiar
  func(); // Hola          // (3) ejecuta la copia (funciona)!
  sayHi(); // Hola        // esto también funciona (por qué no lo haría)

