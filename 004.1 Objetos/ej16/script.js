"use strict"
function User(name) {
    this.name = name;
    this.isAdmin = false;
}
let user = new User("Jack");
alert(user.name); // Jack
alert(user.isAdmin); // false

function BigUser() {
    this.name = "John";
    return { name: "Godzilla" };  // <-- devuelve este objeto
}
alert(new BigUser().name);  // Godzilla, recibió ese objeto

function SmallUser() {
    this.name = "John";
    return; // <-- devuelve this
}
alert(new SmallUser().name);  // John


function User(name) {
    this.name = name;
    this.sayHi = function () {
        alert("Mi nombre es: " + this.name);
    };
}
let john = new User("John");
john.sayHi(); // Mi nombre es: John
  /*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/