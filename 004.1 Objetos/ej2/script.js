"use strict"
let user = {     // un objeto
    name: "John",  // En la clave "name" se almacena el valor "John"
    age: 30        // En la clave "age" se almacena el valor 30
};

// Obteniendo los valores de las propiedades del objeto:
alert( user.name ); // John
alert( user.age ); // 30

user.isAdmin = true;

delete user.age;