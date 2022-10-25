"use strict"
//Estructura WHILE
while (condition) {
    // código
    // llamado "cuerpo del bucle"
}

let i = 0;
while (i < 3) { // muestra 0, luego 1, luego 2
    alert(i);
    i++;
}

let t = 3;
while (t) { // cuando t sea 0, la condición se volverá falsa y el bucle se detendrá
    alert(t);
    t--;
}

//Estructura DO-WHILE
do {
    // cuerpo del bucle
} while (condition);

let k = 0;
do {
    alert(k);
    k++;
} while (k < 3);


//ESTRUCTURA FOR
for (begin; condition; step) { // (comienzo, condición, paso)
    // ... cuerpo del bucle ...
}

for (let i = 0; i < 3; i++) { // muestra 0, luego 1, luego 2
    alert(i);
}

let l = 0; // Ya tenemos i declarada y asignada
for (; l < 3; l++) { // no hay necesidad de "comenzar"
    alert(l); // 0, 1, 2
}

let g = 0;
for (; g < 3;) {
    alert(g++);
}

for (; ;) {
    // se repite sin limites
}


let sum = 0;
while (true) {
    let value = +prompt("Ingresa un número", '');
    if (!value) break; // (*)
    sum += value;
}
alert('Suma: ' + sum);


for (let i = 0; i < 10; i++) {
    // si es verdadero, saltar el resto del cuerpo
    if (i % 2 == 0) continue;
    alert(i); // 1, luego 3, 5, 7, 9
  }

outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let input = prompt(`Value at coords (${i},${j})`, '');
      // Si es una cadena de texto vacía o se canceló, entonces salir de ambos bucles
      if (!input) break outer; // (*)
      // hacer algo con el valor...
    }
  }
  alert('Listo!');

//Switch- Estructura
let c = 2 + 2;
switch (c) {
  case 3:
    alert( 'Muy pequeño' );
    break;
  case 4:
    alert( '¡Exacto!' );
    break;
  case 5:
    alert( 'Muy grande' );
    break;
  default:
    alert( "Desconozco estos valores" );
}

let a = "1";
let b = 0;
switch (+a) {
  case b + 1:
    alert("esto se ejecuta, porque +a es 1, exactamente igual b+1");
    break;
  default:
    alert("esto no se ejecuta");
}

let e = 2 + 2;
switch (e) {
  case 4:
    alert('¡Correcto!');
    break;
  case 3:                    // (*) agrupando dos cases
  case 5:
    alert('¡Incorrecto!');
    alert("¿Por qué no tomas una clase de matemáticas?");
    break;
  default:
    alert('El resultado es extraño. Realmente.');
}

//El tipo importa!!!
let arg = prompt("Ingrese un valor");
switch (arg) {
  case '0':
  case '1':
    alert( 'Uno o cero' );
    break;
  case '2':
    alert( 'Dos' );
    break;
  case 3:
    alert( '¡Nunca ejecuta!' );
    break;
  default:
    alert( 'Un valor desconocido' );
}