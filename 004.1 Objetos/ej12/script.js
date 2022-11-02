"use strict"
let a = {};
let b = a; // copia la referencia
alert( a == b ); // true, verdadero. Ambas variables hacen referencia al mismo objeto
alert( a === b ); // true

let c = {};
let d = {}; // dos objetos independientes
alert( c == d ); // false