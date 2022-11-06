"use strict"
//Strings-------
let single = 'comillas simples';
let double = "comillas dobles";
let backticks = `backticks`;

function sum(a, b) {
    return a + b;
}
alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

let guestList = `Invitados:
 * Juan
 * Pedro
 * Maria
`;
alert(guestList); // una lista de invitados, en múltiples líneas

alert( `La barra invertida: \\` ); // La barra invertida: \
alert('¡Yo soy la \'morsa\'!'); // ¡Yo soy la 'morsa'!
alert("¡Yo soy la 'morsa'!"); // ¡Yo soy la 'morsa'!


alert(`Mi\n`.length); // 3

alert('Interfaz'.toUpperCase()); // INTERFAZ
alert('Interfaz'.toLowerCase()); // interfaz

alert('Interfaz'[0].toLowerCase()); // 'i'

alert('a' > 'Z'); // true
alert('Österreich' > 'Zealand'); // true

// mayúsculas y minúsculas tienen códigos diferentes
alert( "Z".codePointAt(0) ); // 90
alert( "z".codePointAt(0) ); // 122
alert( "z".codePointAt(0).toString(16) ); // 7a (si necesitamos el valor del código en hexadecimal)

alert( String.fromCodePoint(90) ); // Z
alert( String.fromCodePoint(0x5a) ); // Z (también podemos usar un valor hexa como argumento)

let str = '';
for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
alert( str );

alert('Österreich'.localeCompare('Zealand')); // -1

