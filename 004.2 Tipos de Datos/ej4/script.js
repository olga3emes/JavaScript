"use strict"
//ARRAYS---------------------
//let arr = new Array();
//let arr = [];
/*let fruits = ["Apple", "Orange", "Plum"];
alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum
fruits[2] = 'Pear'; // ahora ["Apple", "Orange", "Pear"]
fruits[3] = 'Lemon'; // ahora ["Apple", "Orange", "Pear", "Lemon"]

// mezcla de valores
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
// obtener el objeto del índice 1 y mostrar su nombre
alert( arr[1].name ); // John
// obtener la función del índice 3 y ejecutarla
arr[3](); // hello
*/
let fruits = ["Apple", "Orange", "Plum"];
alert(fruits[fruits.length - 1]); // Plum

// es lo mismo que fruits[fruits.length-1]
alert(fruits.at(-1)); // Plum

fruits = ["Apple", "Orange", "Pear"];
alert(fruits.pop()); // quita "Pear" y lo muestra en un alert
alert(fruits); // Apple, Orange

fruits = ["Apple", "Orange"];
fruits.push("Pear");
alert(fruits); // Apple, Orange, Pear

fruits = ["Apple", "Orange", "Pear"];
alert(fruits.shift()); // quita Apple y lo muestra en un alert
alert(fruits); // Orange, Pear

fruits = ["Orange", "Pear"];
fruits.unshift('Apple');
alert(fruits); // Apple, Orange, Pear

fruits = ["Apple"];
fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");
// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
alert(fruits);

fruits = ["Banana"]
let arr = fruits; // copiado por referencia (dos variables referencian al mismo array)
alert(arr === fruits); // true
arr.push("Pear"); // modifica el array por referencia
alert(fruits); // Banana, Pear - ahora con 2 items

fruits = []; // crea un array
fruits[99999] = 5; // asigna una propiedad con un índice mucho mayor que su longitud
fruits.age = 25; // crea una propiedad con un nombre arbitrario

//Performance:-----------------
fruits.shift(); // toma 1 elemento del principio
fruits.pop(); // toma 1 elemento del final

//Bucles:------------------
arr = ["Apple", "Orange", "Pear"];
for (let i = 0; i < arr.length; i++) {
    alert(arr[i]);
}
fruits = ["Apple", "Orange", "Plum"];
// itera sobre los elementos del array
for (let fruit of fruits) {
    alert(fruit);
}

arr = ["Apple", "Orange", "Pear"];
for (let key in arr) {
    alert(arr[key]); // Apple, Orange, Pear
}


//length--------------------
fruits = [];
fruits[123] = "Apple";
alert(fruits.length); // 124

arr = [1, 2, 3, 4, 5];
arr.length = 2; // truncamos a 2 elementos
alert(arr); // [1, 2]
arr.length = 5; // reponemos la longitud length
alert(arr[3]); // undefined: el valor no se recupera

//new Array():-------------------
arr = new Array("Apple", "Pear", "etc");

arr = new Array(2); // ¿Creará un array de [2]?
alert(arr[0]); // undefined! sin elementos.
alert(arr.length); // longitud 2

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

alert(matrix[1][1]); // 5, el elemento central

//toString()----------------------
arr = [1, 2, 3];
alert(arr); // 1,2,3
alert(String(arr) === '1,2,3'); // true
alert( [] + 1 ); // "1"
alert( [1] + 1 ); // "11"
alert( [1,2] + 1 ); // "1,21"

alert( "" + 1 ); // "1"
alert( "1" + 1 ); // "11"
alert( "1,2" + 1 ); // "1,21"

//No comparar arrays con == --------------
alert( [] == [] ); // falso
alert( [0] == [0] ); // falso

alert( 0 == [] ); // verdadero
alert('0' == [] ); // falso

// después de que [] se convierta en ''
alert( 0 == '' ); // verdadero, ya que '' se convierte en el número 0
alert('0' == '' ); // falso, sin conversión de tipos, strings diferentes