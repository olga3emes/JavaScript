"use strict"
// Estas propiedades están bien
let obj = {
    for: 1,
    let: 2,
    return: 3
};

alert(obj.for + obj.let + obj.return);  // 6

let obj1 = {
    0: "test" // igual que "0": "test"
};
// ambos alerts acceden a la misma propiedad (el número 0 se convierte a una cadena "0")
alert(obj1["0"]); // test
alert(obj1[0]); // test (la misma propiedad)

let obj2 = {};
obj2.__proto__ = 5; // asignando un número
alert(obj2.__proto__); // [objeto Object] 
//- el valor es un objeto, no funciona como "debería"