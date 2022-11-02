"use strict"
let user2 = {};

alert(user2.noSuchProperty === undefined);
// true significa que "no existe tal propiedad"

"key" in object

let user = { name: "John", age: 30 };
alert("age" in user);    // mostrará "true", porque user.age sí existe
alert("blabla" in user); // mostrará false, porque user.blabla no existe

let user3 = { age: 30 };

let key = "age";
alert(key in user3);
// true, porque su propiedad "age" sí existe
// dentro del objeto

let obj = {
    test: undefined
};

alert(obj.test); // es undefined, entonces... ¿Quiere decir realmente existe tal propiedad?
alert("test" in obj); //es true, ¡La propiedad sí existe!