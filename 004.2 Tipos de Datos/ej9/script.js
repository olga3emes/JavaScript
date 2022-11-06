"use strict"
//indexOf, lastIndexOf
let arr = [1, 0, false];
alert(arr.indexOf(0)); // 1
alert(arr.indexOf(false)); // 2
alert(arr.indexOf(null)); // -1
alert(arr.includes(1)); // true

let fruits = ['Apple', 'Orange', 'Apple']
alert(fruits.indexOf('Apple')); // 0 (primera "Apple")
alert(fruits.lastIndexOf('Apple')); // 2 (última "Apple")

const arr2 = [NaN];
alert(arr2.indexOf(NaN));
// -1 (debería ser 0, 
//pero la igualdad === no funciona para NaN)
alert(arr2.includes(NaN));// true (correcto)

//find findIndex

let result = arr.find(function (item, index, array) {
    // si true es devuelto aquí, find devuelve el ítem y la iteración se detiene
    // para el caso en que sea false, devuelve undefined
});

/*let users = [
    { id: 1, name: "Celina" },
    { id: 2, name: "David" },
    { id: 3, name: "Federico" }
];
let user = users.find(item => item.id == 1);
alert(user.name); // Celina
*/

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" },
    { id: 4, name: "John" }
];
// Encontrar el índice del primer John
alert(users.findIndex(user => user.name == 'John')); // 0
// Encontrar el índice del último John
alert(users.findLastIndex(user => user.name == 'John')); // 3

//FILTER ------------
let results = arr.filter(function (item, index, array) {
    // si devuelve true, el elemento es ingresado al array y la iteración continua
    // si nada es encontrado, devuelve un array vacío
});

let users3 = [
    { id: 1, name: "Celina" },
    { id: 2, name: "David" },
    { id: 3, name: "Federico" }
];

// devuelve un array con los dos primeros usuarios
let someUsers = users3.filter(item => item.id < 3);
alert(someUsers.length); // 2