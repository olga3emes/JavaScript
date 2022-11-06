"use strict"
let woody = {
    name: "Woody",
    sayHi: function () {
        alert("Hay una serpiente en mi bota!");
    }
};
woody.sayHi(); //Hay una serpiente en mi bota!

let str = "Hello";
alert( str.toUpperCase() ); // HELLO

alert( typeof 0 ); // "number"
alert( typeof new Number(0) ); // "object"!

let cero = new Number(0);
if (cero) { // cero es true, porque es un objeto
  alert( "¿cero es verdadero?!?" );
}
let num = Number("123"); // convierte string a number