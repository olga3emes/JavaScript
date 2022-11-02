"use strict"
//BIEN ------------
/*let user = {
    name: "John",
    age: 30,
    sayHi() {
        // "this" es el "objeto actual"
        alert(this.name);
    }
};
user.sayHi(); // John*/

//MAl -------------
/*
let user = {
    name: "John",
    age: 30,

    sayHi() {
        alert(user.name); // lleva a un error
    }
};

let admin = user;
user = null; // sobrescribimos para hacer las cosas evidentes
admin.sayHi(); // TypeError: No se puede leer la propiedad 'name' de null
*/
function sayHi() {
    alert(this.name);
}

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
    alert(this.name);
}
// usa la misma función en dos objetos
user.f = sayHi;
admin.f = sayHi;
// estos llamados tienen diferente "this"
// "this" dentro de la función es el objeto "antes del punto"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)
admin['f'](); // Admin (punto o corchetes para acceder al método, no importa)

let user = {
    firstName: "Ilya",
    sayHi() {
        let arrow = () => alert(this.firstName);
        arrow();
    }
};

user.sayHi(); // Ilya


