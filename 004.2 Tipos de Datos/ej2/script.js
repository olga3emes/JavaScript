"use strict"
//NÚMEROS---------------------
let billion = 1000000000;
let billion_ = 1_000_000_000;

let billione = 1e9;  // 1 billion, literalmente: 1 y 9 ceros
alert( 7.3e9 );  // 7.3 billions (tanto 7300000000 como 7_300_000_000)

1e3 === 1 * 1000; // e3 significa *1000
1.23e6 === 1.23 * 1000000; // e6 significa *1000000

let mсs = 0.000001;
let mcs = 1e-6; // cinco ceros a la izquierda de 1
// -3 divide por 1 con 3 ceros
1e-3 === 1 / 1000; // 0.001
// -6 divide por 1 con 6 ceros
1.23e-6 === 1.23 / 1000000; // 0.00000123
// un ejemplo con un número mayor
1234e-2 === 1234 / 100; // 12.34, el punto decimal se mueve 2 veces


//OCTALES
alert( 0xff ); // 255
alert( 0xFF ); // 255 (lo mismo en mayúsculas o minúsculas )

let a = 0b11111111; // binario de 255
let b = 0o377; // octal de 255
alert( a == b ); // true, el mismo número 255 en ambos lados


//toString
let num2 = 255;
alert( num2.toString(16) );  // ff
alert( num2.toString(2) );   // 11111111

alert( 123456..toString(36) ); // 2n9c

//Redondeo
let num = 1.23456;
alert( Math.round(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23

num = 12.34;
alert( num.toFixed(1) ); // "12.3"

num = 12.36;
alert( num.toFixed(1) ); // "12.4"

num = 12.34;
alert( num.toFixed(5) ); // "12.34000", con ceros agregados para dar exactamente 5 dígitos

alert( 1e500 ); // Infinity

alert( 0.1 + 0.2 == 0.3 ); // false

alert( 0.1 + 0.2 ); // 0.30000000000000004

let sum = 0.1 + 0.2;
alert( sum.toFixed(2) ); // "0.30


alert( +sum.toFixed(2) ); // 0.3

alert( (0.1 * 10 + 0.2 * 10) / 10 ); // 0.3
alert( (0.28 * 100 + 0.14 * 100) / 100); // 0.4200000000000001

//isInfinite o isNaN
alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true

alert( NaN === NaN ); // false

alert( isFinite("15") ); // true
alert( isFinite("str") ); // false, porque es un valor especial: NaN
alert( isFinite(Infinity) ); // false, porque es un valor especial: Infinity

let numerito = +prompt("Enter a number", '');
// siempre true salvo que ingreses  Infinity, -Infinity o  un valor no numérico
alert( isFinite(numerito) );

//parseInt parseFloat
alert( +"100px" ); // NaN
alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5
alert( parseInt('12.3') ); // 12, devuelve solo la parte entera
alert( parseFloat('12.3.4') ); // 12.3, el segundo punto detiene la lectura

alert( parseInt('a123') ); // NaN, el primer símbolo detiene la lectura

alert( Math.random() ); // 0.1234567894322
alert( Math.random() ); // 0.5435252343232
alert( Math.random() ); // ... (cualquier número aleatorio)

alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1

alert( Math.pow(2, 10) ); // 2 elevado a la potencia de 10 = 1024