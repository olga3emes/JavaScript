"use strict"
//Splice:-------------------

let arr = ["voy", "a", "casa"];
delete arr[1]; // remueve "a"
alert( arr[1] ); // undefined
// ahora arr = ["voy",  , "casa"];
alert( arr.length ); // 3

//arr.splice(start[, deleteCount, elem1, ..., elemN])

arr = ["Yo", "estudio", "JavaScript"];
arr.splice(1, 1); // desde el índice 1, remover 1 elemento
alert( arr ); // ["Yo", "JavaScript"]

arr = ["Yo", "estudio", "JavaScript", "ahora", "mismo"];
// quita los primeros 3 elementos y los reemplaza con otros
arr.splice(0, 3, "a", "bailar");
alert( arr ) // ahora ["a", "bailar", "ahora", "mismo"]

arr = ["Yo", "estudio", "JavaScript", "ahora", "mismo"];
// remueve los 2 primeros elementos
let removed = arr.splice(0, 2);
alert( removed ); // "Yo", "estudio" <-- array de los elementos removidos

arr = ["Yo", "estudio", "JavaScript"];
// desde el index 2
// quitar 0
// después insertar "el", "complejo" y "language"
arr.splice(2, 0,"el", "complejo", "language");
alert( arr ); // "Yo", "estudio","el", "complejo", "language", "JavaScript"
